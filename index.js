const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello from Nikhil\'s DevOps App!');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
