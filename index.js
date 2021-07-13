const http = require('http');
const agents = require('./data/agents.json');
const logs = require('./data/logs.json');
const resolutions = require('./data/resolution.json');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  if (req.url === '/' || req.url === '/home' || req.url === '/agents') {
    res.end(JSON.stringify(agents));
} else if (req.url === '/logs') {
    res.end(JSON.stringify(logs));
} else if (req.url === '/resolutions') {
    res.end(JSON.stringify(resolutions));
} else {
    res.end(JSON.stringify(agents));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// To start backend server run
// node index
