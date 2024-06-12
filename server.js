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

// 상품과 이미지를 가져오는 엔드포인트
app.post('/fetch-goods', async (req, res) => {
  const gids = req.body.gids;

  if (!gids || gids.length === 0) {
    res.status(400).json({ error: 'GID 목록이 제공되지 않음' });
    return;
  }

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
    res.json(results);
  });
});

// /goods/:id 엔드포인트 추가
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

    res.json(product);
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
