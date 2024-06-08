const http = require('http');
const mysql = require('mysql');
const url = require('url');

let connection;

function handleDisconnect() {
  connection = mysql.createConnection({
    host: '13.75.124.149',
    user: 'root',
    password: 'rlaehdehd20',
    database: 'train',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      setTimeout(handleDisconnect, 2000); // 2초 후 재시도
    } else {
      console.log('Connected to MySQL');
    }
  });

  connection.on('error', (err) => {
    console.error('MySQL error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNRESET') {
      handleDisconnect(); // 연결이 끊어진 경우 재연결
    } else {
      throw err;
    }
  });
}

handleDisconnect();

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const id = parsedUrl.query.id;

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (path === '/goods') {
    const query = 'SELECT * FROM goods ORDER BY RAND() LIMIT 10';
    connection.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching goods:', err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Error fetching goods' }));
        return;
      }
      console.log('Goods list:', results);
      res.end(JSON.stringify(results));
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const port = 5001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
