const http = require('http');
const url = require('url');
const PORT = 3000;

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'});

    let param = url.parse(req.url, true).query;
    
    res.write(`URL parameters are: ${param.name}, ${param.age} and ${param.occupation}`);

    res.end();
}).listen(PORT);