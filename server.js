// const http = require('http');
// const mysql = require('mysql');
// const url = require('url');
// const cors = require('cors');
// const express = require('express');

// const app = express();

// // CORS 설정
// app.use(cors());

// // MySQL 연결 설정
// let connection;

// function handleDisconnect() {
//   connection = mysql.createConnection({
//     host: '13.75.124.149',
//     user: 'root',
//     password: 'rlaehdehd20',
//     database: 'train',
//   });

//   connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//       setTimeout(handleDisconnect, 2000); // 2초 후 재시도
//     } else {
//       console.log('Connected to MySQL');
//     }
//   });

//   connection.on('error', (err) => {
//     console.error('MySQL error', err);
//     if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
//       handleDisconnect(); // 연결이 끊어진 경우 재연결
//     } else {
//       throw err;
//     }
//   });
// }

// handleDisconnect();

// // 데이터베이스에서 상품 목록 가져오기
// app.get('/goods', (req, res) => {
//   const query = 'SELECT * FROM goods ORDER BY RAND() LIMIT 10';
//   connection.query(query, (err, results) => {
//     if (err) {
//       console.error('Error fetching goods:', err);
//       res.status(500).json({ error: 'Error fetching goods' });
//       return;
//     }
//     console.log('Goods list:', results);
//     res.json(results);
//   });
// });

// const port = 5001;
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 5001;

// app.use(cors());

// const connection = mysql.createConnection({
//   host: '13.75.124.149',
//   user: 'root',
//   password: 'rlaehdehd20',
//   database: 'train',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     return;
//   }
//   console.log('Connected to MySQL');
// });

// app.get('/goods', (req, res) => {
//   const query = 'SELECT * FROM goods ORDER BY RAND() LIMIT 10';
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
//       console.error('Error fetching product:', err);
//       res.status(500).json({ error: 'Error fetching product' });
//       return;
//     }
//     if (results.length === 0) {
//       res.status(404).json({ error: 'Product not found' });
//       return;
//     }
//     res.json(results[0]);
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });



const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());

const connection = mysql.createConnection({
  host: '13.75.124.149',
  user: 'root',
  password: 'rlaehdehd20',
  database: 'train',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/goods', (req, res) => {
  const query = 'SELECT * FROM goods ORDER BY RAND() LIMIT 10';
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
      console.error('Error fetching product:', err);
      res.status(500).json({ error: 'Error fetching product' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
