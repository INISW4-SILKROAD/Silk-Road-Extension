const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const socketIo = require('socket.io');
const http = require('http');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 5001;

app.use(cors());
app.use(bodyParser.json());


// 데이터베이스 연결
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL 연결 성공 !');
});



// 촉감 정보 불러오기
// : touch_data.json에 저장된 사용자가 검색한 상품의 촉감 정보를 불러온다
app.get('/touchinfo', (req, res) => {
  try {
    const data = fs.readFileSync('./touch_data.json', 'utf-8');
    const touchData = JSON.parse(data);
    res.json(touchData.touchInfo);
  } catch (err) {
    console.error('Error reading touch data from JSON file:', err);
    res.status(500).json({ error: 'Error reading touch data' });
  }
});


// 단일 상품 정보 조회
app.get('/goods/:id', (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT sg.*, i.PATH AS image_path
    FROM service_goods sg
    LEFT JOIN image i ON sg.ID = i.GID
    WHERE sg.ID = ?
    AND i.IID = (
      SELECT MIN(i2.IID)
      FROM image i2
      WHERE i2.GID = sg.ID
    )
  `;

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error('상품 불러오기 오류:', err);
      res.status(500).json({ error: '상품 불러오기 오류' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: '상품을 찾을 수 없음' });
      return;
    }

    const product = {
      ID: results[0].ID,
      NAME: results[0].NAME,
      PRICE: results[0].PRICE,
      LINK: results[0].LINK,
      SOFTNESS: results[0].SOFTNESS,
      THICKNESS: results[0].THICKNESS,
      SMOOTHNESS: results[0].SMOOTHNESS,
      FLEXIBILITY: results[0].FLEXIBILITY,
      image_path: results[0].image_path
    };

    console.log('불러온 상품 :', product);
    res.json(product);
  });
});



// 소켓 통신
io.on('connection', (socket) => {
  console.log('Client 연결');

  try {
    const data = fs.readFileSync('./touch_data.json', 'utf-8');
    const touchData = JSON.parse(data);
    socket.emit('touchInfo', touchData);
  } catch (err) {
    console.error('JSON 파일에서 촉감 정보 읽기 에러 :', err);
  }

  socket.on('disconnect', () => {
    console.log('Client 연결 끊김');
  });

});


// 크롤링된 데이터(JSON 파일) 중 가장 최신 데이터 찾기
const findLatestJsonFile = (dir) => {
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.json'));
  const sortedFiles = files.sort((a, b) => {
    const [dateA, timeA] = a.split('_').slice(0, 2);
    const [dateB, timeB] = b.split('_').slice(0, 2);
    return new Date(`${dateA}T${timeA}`) - new Date(`${dateB}T${dateB}`);
  });
  return sortedFiles.pop();
};



// JSON에서 혼용율과 텍스처 이미지 정보만 추출하기
const processJsonFile = (filePath) => {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const validData = data.filter(item => item.portion && item.texture_img);
  return validData.length > 0 ? validData[0] : null;
};


// 추출한 혼용율, 텍스처 이미지를 촉감 모델에 input으로 넣는 커맨드 실행
const sendToTouchModel = async (portion, textureImg) => {
  const textureImgName = path.basename(textureImg);
  const absoluteTextureImgPath = path.join('C:/Users/rlaeh/Desktop/env/Oasis-Road/result/data/image/texture', textureImgName);
  const command = `cd C:\\Users\\rlaeh\\Desktop\\env\\Steppe-Road && C:\\Users\\rlaeh\\anaconda3\\envs\\steppe-road\\python.exe c:\\Users\\rlaeh\\Desktop\\env\\Steppe-Road\\steppe_road_kostatiniyye.py --path "${absoluteTextureImgPath}" --portion "${portion.replace(/%/g, '')}"`;

  return new Promise((resolve, reject) => {
    exec(command, { shell: 'cmd.exe' }, (error, stdout, stderr) => {
      if (error) {
        console.error(`촉감 모델 오류: ${error.message}`);
        reject(error);
      }
      if (stderr) {
        const warnings = stderr.split('\n').filter(line => line.includes('UserWarning'));
        if (warnings.length === 0) {
          console.error(`촉감 모델 실행 stderr: ${stderr}`);
          reject(new Error(stderr));
        }
      }
      console.log(`촉감 모델 실행 stdout: ${stdout}`);
      resolve(stdout);
    });
  });
};


// 클라이언트로부터 상품 ID 목록을 받아 상품 조회
app.post('/fetch-goods', async (req, res) => {
  const gids = req.body.gids;

  if (!gids || gids.length === 0) {
    res.status(400).json({ error: 'GID 목록이 제공되지 않음' });
    return;
  }

  console.log(`받은 GID : ${gids}`);

  const placeholders = gids.map(() => '?').join(',');
  const query = `
    SELECT sg.*, i.PATH AS image_path
    FROM service_goods sg
    LEFT JOIN image i ON sg.ID = i.GID
    WHERE sg.ID IN (${placeholders})
    AND i.IID = (
      SELECT MIN(i2.IID)
      FROM image i2
      WHERE i2.GID = sg.ID
    )
  `;

  connection.query(query, gids, (err, results) => {
    if (err) {
      console.error('상품 불러오기 오류:', err);
      res.status(500).json({ error: '상품 불러오기 오류' });
      return;
    }
    console.log('불러온 상품 :', results);
    res.json(results);
  });
});


// 사용자가 클릭한 이미지 링크로 얻은 데이터를 이미지 검색 모델 구동 서버 Flask로 전송
app.post('/submit', async (req, res) => {
  const { imageUrl, pageUrl, productId } = req.body;

  if (!imageUrl || !pageUrl || !productId) {
    res.status(400).json({ error: '잘못된 데이터' });
    return;
  }

  console.log(`받은 image URL: ${imageUrl}`);
  console.log(`받은 page URL: ${pageUrl}`);
  console.log(`받은 product ID: ${productId}`);

  try {
    const flaskResponse = await axios.post('http://127.0.0.1:5002/search', { image_url: imageUrl });
    const searchResults = flaskResponse.data;

    console.log('Flask 서버로부터 받은 검색 결과:', searchResults);

    const gids = searchResults.map(result => result.gid);
    if (gids.length === 0) {
      res.status(404).json({ error: '검색 결과에서 일치하는 상품을 찾을 수 없음' });
      return;
    }

    const placeholders = gids.map(() => '?').join(',');
    const query = `SELECT sg.*, i.PATH AS image_path
                   FROM service_goods sg
                   LEFT JOIN image i ON sg.ID = i.GID
                   WHERE sg.ID IN (${placeholders})
                   AND i.IID = (
                     SELECT MIN(i2.IID)
                     FROM image i2
                     WHERE i2.GID = sg.ID
                   )`;

    connection.query(query, gids, async (err, results) => {
      if (err) {
        console.error('상품 불러오기 오류:', err);
        res.status(500).json({ error: '상품 불러오기 오류' });
        return;
      }

      const combinedResults = searchResults.map(result => ({
        ...result,
        product: results.find(item => item.ID === result.gid) || null
      }));

      console.log('결과 : ', combinedResults);

      res.status(200).json(combinedResults);


      // 크롤러 실행 커맨드
      const command = `cd C:\\Users\\rlaeh\\Desktop\\env\\Oasis-Road && conda activate pp && scrapy crawl one -a id=${productId}`;
      exec(command, { shell: 'cmd.exe' }, async (error, stdout, stderr) => {
        if (error) {
          console.error(`크롤러 실행 오류: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`크롤러 실행 stderr: ${stderr}`);
          return;
        }
        console.log(`크롤러 실행 stdout: ${stdout}`);

        const dir = 'C:/Users/rlaeh/Desktop/env/Oasis-Road/result';
        const latestFile = findLatestJsonFile(dir);

        if (!latestFile) {
          console.error('JSON 파일을 찾을 수 없음');
          return;
        }

        const filePath = path.join(dir, latestFile);
        const data = processJsonFile(filePath);

        if (!data) {
          console.log('해당 정보만으로는 촉감을 예측할 수 없음');
          return;
        }

        const { portion, texture_img } = data;
        if (!portion || !texture_img) {
          console.log('해당 상품은 촉감 정보를 알 수 없음');
          return;
        }

        try {
          const touchModelResponse = await sendToTouchModel(portion, texture_img);
          if (!touchModelResponse) {
            console.error('촉감 모델 오류');
            return;
          }
          const touchInfo = touchModelResponse.match(/\(([^)]+)\)/)[1].split(',').map(value => parseInt(value, 10) + 1);
          console.log('추출한 촉감 정보 :', touchInfo);

          const touchData = { productId, touchInfo };
          fs.writeFileSync('./touch_data.json', JSON.stringify(touchData), 'utf-8');

          io.emit('touchInfo', { productId, touchInfo });
        } catch (error) {
          console.error('촉감 모델 오류 :', error);
        }
      });
    });
  } catch (error) {
    console.error('Flask 서버로부터 검색 결과를 받는 중 오류 발생:', error);
    res.status(500).json({ error: 'Flask 서버로부터 검색 결과를 받는 중 오류 발생' });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
