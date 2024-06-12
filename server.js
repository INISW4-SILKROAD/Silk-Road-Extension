// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const axios = require('axios');

// const app = express();
// const port = 5001;

// app.use(cors());
// app.use(bodyParser.json()); // JSON 요청 파싱

// const connection = mysql.createConnection({ // db 연결
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'rlaehdehd20',
//   database: 'train',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('MySQL 연결 오류:', err);
//     return;
//   }
//   console.log('MySQL 연결 성공 !');
// });

// app.get('/goods', (req, res) => {
//   const query = 'SELECT * FROM goods ORDER BY RAND() LIMIT 10'; // (임시) 임의의 데이터 10개 출력
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching goods:', err);
//       res.status(500).json({ error: 'Error fetching goods' });
//       return;
//     }
//     res.json(results);
//   });
// });

// app.get('/goods/:id', (req, res) => {
//   const id = req.params.id;
//   const query = 'SELECT * FROM goods WHERE ID = ?';
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
//     res.json(results[0]);
//   });
// });

// app.post('/submit', async (req, res) => {
//   const { imageUrl, pageUrl } = req.body;

//   if (!imageUrl || !pageUrl) {
//     res.status(400).json({ error: '잘못된 데이터' });
//     return;
//   }

//   console.log(`Received image URL: ${imageUrl}`);
//   console.log(`Received page URL: ${pageUrl}`);

//   // // 받은 데이터로 처리 작업을 수행 -> 이미지 검색 모델, 크롤러 (flask) 서버로 전달

//   // res.status(200).send('데이터 받기 성공');


//   try {
//     // Flask 서버로 이미지 URL 전송 및 결과 수신
//     const flaskResponse = await axios.post('http://127.0.0.1:5002/search', { image_url: imageUrl });
//     const searchResults = flaskResponse.data;

//     res.status(200).json(searchResults);  // 결과를 클라이언트에 전달
//   } catch (error) {
//     console.error('Flask 서버와의 통신 오류:', error);
//     res.status(500).json({ error: '이미지 검색 중 오류 발생' });
//   }

// });

// app.listen(port, () => {
//   console.log(`Server running at http://127.0.0.1:${port}`);
// });





// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const axios = require('axios'); // axios 추가

// const app = express();
// const port = 5001;

// app.use(cors());
// app.use(bodyParser.json()); // JSON 요청 파싱

// const connection = mysql.createConnection({ // db 연결
//   host: '13.75.124.149',
//   user: 'root',
//   password: 'rlaehdehd20',
//   database: 'train',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('MySQL 연결 오류:', err);
//     return;
//   }
//   console.log('MySQL 연결 성공 !');
// });

// app.get('/goods', (req, res) => {
//   const query = 'SELECT * FROM goods ORDER BY RAND() LIMIT 10'; // (임시) 임의의 데이터 10개 출력
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching goods:', err);
//       res.status(500).json({ error: 'Error fetching goods' });
//       return;
//     }
//     res.json(results);
//   });
// });

// app.get('/goods/:id', (req, res) => {
//   const id = req.params.id;
//   const query = 'SELECT * FROM goods WHERE ID = ?';
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
//     res.json(results[0]);
//   });
// });

// app.post('/submit', async (req, res) => {
//   const { imageUrl, pageUrl } = req.body;

//   if (!imageUrl || !pageUrl) {
//     res.status(400).json({ error: '잘못된 데이터' });
//     return;
//   }

//   console.log(`Received image URL: ${imageUrl}`);
//   console.log(`Received page URL: ${pageUrl}`);



//   // try {
//   //   const flaskResponse = await axios.post('http://127.0.0.1:5002/search', { image_url: imageUrl });
//   //   const searchResults = flaskResponse.data;

//   //   console.log('Flask 서버로부터 받은 검색 결과:', searchResults);
//   //   res.status(200).json(searchResults);
//   // } catch (error) {
//   //   console.error('Flask 서버로부터 검색 결과를 받는 중 오류 발생:', error);
//   //   res.status(500).json({ error: 'Flask 서버로부터 검색 결과를 받는 중 오류 발생' });
//   // }

//   try {
//     const flaskResponse = await axios.post('http://127.0.0.1:5002/search', { image_url: imageUrl });
//     const searchResults = flaskResponse.data;

//     console.log('Flask 서버로부터 받은 검색 결과:', searchResults);

//     // gid를 통해 MySQL에서 상품 정보 조회
//     const gids = searchResults.map(result => result.gid);
//     const placeholders = gids.map(() => '?').join(',');
//     const query = `SELECT * FROM goods WHERE ID IN (${placeholders})`;

//     connection.query(query, gids, (err, results) => {
//       if (err) {
//         console.error('상품 불러오기 오류:', err);
//         res.status(500).json({ error: '상품 불러오기 오류' });
//         return;
//       }

//       // 검색 결과와 DB 정보를 결합하여 클라이언트에 반환
//       const combinedResults = searchResults.map(result => ({
//         ...result,
//         product: results.find(item => item.ID === result.gid) || null
//       }));

//       res.status(200).json(combinedResults);
//     });
//   } catch (error) {
//     console.error('Flask 서버로부터 검색 결과를 받는 중 오류 발생:', error);
//     res.status(500).json({ error: 'Flask 서버로부터 검색 결과를 받는 중 오류 발생' });
//   }

// });

// app.listen(port, () => {
//   console.log(`Server running at http://127.0.0.1:${port}`);
// });


// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const axios = require('axios');

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

// app.post('/submit', async (req, res) => {
//   const { imageUrl, pageUrl } = req.body;

//   if (!imageUrl || !pageUrl) {
//     res.status(400).json({ error: '잘못된 데이터' });
//     return;
//   }

//   console.log(`Received image URL: ${imageUrl}`);
//   console.log(`Received page URL: ${pageUrl}`);

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
//     const query = `SELECT * FROM service_goods WHERE ID IN (${placeholders})`;

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

//       res.status(200).json(combinedResults);
//     });
//   } catch (error) {
//     console.error('Flask 서버로부터 검색 결과를 받는 중 오류 발생:', error);
//     res.status(500).json({ error: 'Flask 서버로부터 검색 결과를 받는 중 오류 발생' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://127.0.0.1:${port}`);
// });



const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: '13.75.124.149',
  user: 'root',
  password: 'rlaehdehd20',
  database: 'service',
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL 연결 성공 !');
});

app.get('/goods/:id', (req, res) => {
  const id = req.params.id;
  const query = `
    SELECT sg.*, i.PATH 
    FROM service_goods sg
    LEFT JOIN image i ON sg.ID = i.GID
    WHERE sg.ID = ?
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
      FLEXIBILITY: results[0].FLEXIBILITY
    };
    const images = results.map(result => result.PATH);

    res.json({ product, images });
  });
});

app.post('/submit', async (req, res) => {
  const { imageUrl, pageUrl } = req.body;

  if (!imageUrl || !pageUrl) {
    res.status(400).json({ error: '잘못된 데이터' });
    return;
  }

  console.log(`Received image URL: ${imageUrl}`);
  console.log(`Received page URL: ${pageUrl}`);

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
    const query = `SELECT * FROM service_goods WHERE ID IN (${placeholders})`;

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

      res.status(200).json(combinedResults);
    });
  } catch (error) {
    console.error('Flask 서버로부터 검색 결과를 받는 중 오류 발생:', error);
    res.status(500).json({ error: 'Flask 서버로부터 검색 결과를 받는 중 오류 발생' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
