const http = require('http');
const PORT = 3000;

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}).listen(PORT);