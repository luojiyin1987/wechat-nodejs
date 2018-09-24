// "use strict";
const http = require('http');

http.createServer((req, res) => 
{
    let status = 200;
    res.writeHead(status, {'Content-Type':'text/plain'});
    res.end('Hello Node.js\n');
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');