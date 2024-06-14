
// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 5001;

// app.use(cors());
// app.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: '13.75.124.149',
//   user: 'root',
//   password: 'rlaehdehd20',
//   database: 'service',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('MySQL 연결 오류:', err);
//     return;
//   }
//   console.log('MySQL 연결 성공 !');
// });

// // 가장 최신의 JSON 파일을 찾는 함수
// const findLatestJsonFile = (dir) => {
//   const files = fs.readdirSync(dir).filter(file => file.endsWith('.json'));
//   const sortedFiles = files.sort((a, b) => {
//     const [dateA, timeA] = a.split('_').slice(0, 2);
//     const [dateB, timeB] = b.split('_').slice(0, 2);
//     return new Date(`${dateA}T${timeA}`) - new Date(`${dateB}T${timeB}`);
//   });
//   return sortedFiles.pop();
// };

// // JSON 파일을 읽고 필요한 데이터를 추출하는 함수
// const processJsonFile = (filePath) => {
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
//   const validData = data.filter(item => item.portion && item.texture_img);
//   return validData.length > 0 ? validData[0] : null;
// };

// // 촉감 추정 모델에 데이터를 보내는 함수
// const sendToTouchModel = async (portion, textureImg) => {
//   try {
//     const response = await axios.post('http://touch-model-endpoint', { portion, textureImg });
//     return response.data;
//   } catch (error) {
//     console.error('Error sending data to touch model:', error);
//     return null;
//   }
// };

// // 상품과 이미지를 가져오는 엔드포인트
// app.post('/fetch-goods', async (req, res) => {
//   const gids = req.body.gids;

//   if (!gids || gids.length === 0) {
//     res.status(400).json({ error: 'GID 목록이 제공되지 않음' });
//     return;
//   }

//   console.log(`Received gids: ${gids}`);

//   const placeholders = gids.map(() => '?').join(',');
//   const query = `
//     SELECT sg.*, i.PATH AS image_path
//     FROM service_goods sg
//     LEFT JOIN image i ON sg.ID = i.GID
//     WHERE sg.ID IN (${placeholders})
//     AND i.IID = (
//       SELECT MIN(i2.IID)
//       FROM image i2
//       WHERE i2.GID = sg.ID
//     )
//   `;

//   connection.query(query, gids, (err, results) => {
//     if (err) {
//       console.error('상품 불러오기 오류:', err);
//       res.status(500).json({ error: '상품 불러오기 오류' });
//       return;
//     }
//     console.log('Fetched goods:', results);
//     res.json(results);
//   });
// });

// app.post('/submit', async (req, res) => {
//   const { imageUrl, pageUrl, productId } = req.body;

//   if (!imageUrl || !pageUrl || !productId) {
//     res.status(400).json({ error: '잘못된 데이터' });
//     return;
//   }

//   console.log(`Received image URL: ${imageUrl}`);
//   console.log(`Received page URL: ${pageUrl}`);
//   console.log(`Received product ID: ${productId}`);

//   try {
//     const flaskResponse = await axios.post('http://127.0.0.1:5002/search', { image_url: imageUrl });
//     const searchResults = flaskResponse.data;

//     console.log('Flask 서버로부터 받은 검색 결과:', searchResults);

//     const gids = searchResults.map(result => result.gid);
//     if (gids.length === 0) {
//       res.status(404).json({ error: '검색 결과에서 일치하는 상품을 찾을 수 없음' });
//       return;
//     }

//     const placeholders = gids.map(() => '?').join(',');
//     const query = `SELECT sg.*, i.PATH AS image_path
//                    FROM service_goods sg
//                    LEFT JOIN image i ON sg.ID = i.GID
//                    WHERE sg.ID IN (${placeholders})
//                    AND i.IID = (
//                      SELECT MIN(i2.IID)
//                      FROM image i2
//                      WHERE i2.GID = sg.ID
//                    )`;

//     connection.query(query, gids, (err, results) => {
//       if (err) {
//         console.error('상품 불러오기 오류:', err);
//         res.status(500).json({ error: '상품 불러오기 오류' });
//         return;
//       }

//       const combinedResults = searchResults.map(result => ({
//         ...result,
//         product: results.find(item => item.ID === result.gid) || null
//       }));

//       console.log('Combined results:', combinedResults);
//       res.status(200).json(combinedResults);

//       // 상품 ID를 사용하여 conda 가상환경에서 배치 파일을 실행
//       const command = `cd C:\\Users\\rlaeh\\Desktop\\env\\Oasis-Road && conda activate pp && scrapy crawl one -a id=${productId}`;
//       exec(command, { shell: 'cmd.exe' }, (error, stdout, stderr) => {
//         if (error) {
//           console.error(`배치 파일 실행 오류: ${error.message}`);
//           return;
//         }
//         if (stderr) {
//           console.error(`배치 파일 실행 stderr: ${stderr}`);
//           return;
//         }
//         console.log(`배치 파일 실행 stdout: ${stdout}`);

//         // 크롤링이 완료되면 최신 JSON 파일을 처리하고 촉감 모델에 데이터를 보냅니다.
//         const dir = 'C:/Users/rlaeh/Desktop/env/Oasis-Road/result';
//         const latestFile = findLatestJsonFile(dir);

//         if (!latestFile) {
//           console.error('No JSON files found');
//           return;
//         }

//         const filePath = path.join(dir, latestFile);
//         const data = processJsonFile(filePath);

//         if (!data) {
//           console.log('해당 정보만으로는 촉감을 예측할 수 없습니다');
//           return;
//         }

//         const { portion, texture_img } = data;
//         sendToTouchModel(portion, texture_img).then(touchModelResponse => {
//           if (!touchModelResponse) {
//             console.error('Error processing touch model');
//             return;
//           }
//           console.log('Touch model response:', touchModelResponse);
//         });
//       });
//     });
//   } catch (error) {
//     console.error('Flask 서버로부터 검색 결과를 받는 중 오류 발생:', error);
//     res.status(500).json({ error: 'Flask 서버로부터 검색 결과를 받는 중 오류 발생' });
//   }
// });

// app.get('/goods/:id', (req, res) => {
//   const id = req.params.id;
//   const query = `
//     SELECT sg.*, i.PATH AS image_path
//     FROM service_goods sg
//     LEFT JOIN image i ON sg.ID = i.GID
//     WHERE sg.ID = ?
//     AND i.IID = (
//       SELECT MIN(i2.IID)
//       FROM image i2
//       WHERE i2.GID = sg.ID
//     )
//   `;

//   connection.query(query, [id], (err, results) => {
//     if (err) {
//       console.error('상품 불러오기 오류:', err);
//       res.status(500).json({ error: '상품 불러오기 오류' });
//       return;
//     }
//     if (results.length === 0) {
//       res.status(404).json({ error: '상품을 찾을 수 없음' });
//       return;
//     }

//     const product = {
//       ID: results[0].ID,
//       NAME: results[0].NAME,
//       PRICE: results[0].PRICE,
//       LINK: results[0].LINK,
//       SOFTNESS: results[0].SOFTNESS,
//       THICKNESS: results[0].THICKNESS,
//       SMOOTHNESS: results[0].SMOOTHNESS,
//       FLEXIBILITY: results[0].FLEXIBILITY,
//       image_path: results[0].image_path
//     };

//     console.log('Fetched product:', product);
//     res.json(product);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://127.0.0.1:${port}`);
// });


const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: '13.75.124.149',
  user: 'root',
  password: 'rlaehdehd20',
  database: 'test',
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL 연결 성공 !');
});

// 상품과 이미지를 가져오는 엔드포인트
app.post('/fetch-goods', async (req, res) => {
  const gids = req.body.gids;

  if (!gids || gids.length === 0) {
    res.status(400).json({ error: 'GID 목록이 제공되지 않음' });
    return;
  }

  console.log(`Received gids: ${gids}`);

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
    console.log('Fetched goods:', results);
    res.json(results);
  });
});

app.post('/submit', async (req, res) => {
  const { imageUrl, pageUrl, productId } = req.body;

  if (!imageUrl || !pageUrl || !productId) {
    res.status(400).json({ error: '잘못된 데이터' });
    return;
  }

  console.log(`Received image URL: ${imageUrl}`);
  console.log(`Received page URL: ${pageUrl}`);
  console.log(`Received product ID: ${productId}`);

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

    connection.query(query, gids, (err, results) => {
      if (err) {
        console.error('상품 불러오기 오류:', err);
        res.status(500).json({ error: '상품 불러오기 오류' });
        return;
      }

      const combinedResults = searchResults.map(result => ({
        ...result,
        product: results.find(item => item.ID === result.gid) || null
      }));

      console.log('Combined results:', combinedResults);
      res.status(200).json(combinedResults);

      // 상품 ID에 해당하는 촉감 데이터 추가 조회
      const touchQuery = `
        SELECT SOFTNESS, THICKNESS, SMOOTHNESS, FLEXIBILITY
        FROM service_goods
        WHERE ID = ?
      `;

      connection.query(touchQuery, [productId], (touchErr, touchResults) => {
        if (touchErr) {
          console.error('촉감 데이터 불러오기 오류:', touchErr);
          return;
        }

        if (touchResults.length === 0) {
          console.error('해당 상품의 촉감 데이터를 찾을 수 없음');
          return;
        }

        console.log('Fetched touch data:', touchResults[0]);
        // 필요한 경우 추가 작업 수행
      });

    });
  } catch (error) {
    console.error('Flask 서버로부터 검색 결과를 받는 중 오류 발생:', error);
    res.status(500).json({ error: 'Flask 서버로부터 검색 결과를 받는 중 오류 발생' });
  }
});

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

    console.log('Fetched product:', product);
    res.json(product);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
