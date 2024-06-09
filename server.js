const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json()); // JSON 요청 파싱

const connection = mysql.createConnection({ // db 연결
  host: '13.75.124.149',
  user: 'root',
  password: 'rlaehdehd20',
  database: 'train',
});

connection.connect((err) => {
  if (err) {
    console.error('MySQL 연결 오류:', err);
    return;
  }
  console.log('MySQL 연결 성공 !');
});

app.get('/goods', (req, res) => {
  const query = 'SELECT * FROM goods ORDER BY RAND() LIMIT 10'; // (임시) 임의의 데이터 10개 출력
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching goods:', err);
      res.status(500).json({ error: 'Error fetching goods' });
      return;
    }
    res.json(results);
  });
});

app.get('/goods/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM goods WHERE ID = ?';
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
    res.json(results[0]);
  });
});

app.post('/submit', (req, res) => {
  const { imageUrl, pageUrl } = req.body;

  if (!imageUrl || !pageUrl) {
    res.status(400).json({ error: '잘못된 데이터' });
    return;
  }

  console.log(`Received image URL: ${imageUrl}`);
  console.log(`Received page URL: ${pageUrl}`);

  // 받은 데이터로 처리 작업을 수행 -> 이미지 검색 모델, 크롤러 (flask) 서버로 전달

  res.status(200).send('데이터 받기 성공');
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
