//about Node.js : Node.js is an open source server environment
//                Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
//                A common task for a web server can be to open a file on the server and return the content to the client.
//                Node.js can generate dynamic page content
//                Node.js can create, open, read, write, delete, and close files on the server
//                Node.js can collect form data
//                Node.js can add, delete, modify data in your database


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});