const http = require('http');
const PORT = 3000;

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('Change/Add the /alias name to get the URL query string and reload the webpage...<br>');
    res.write('For example: localhost:3000/register <br>');
    res.write('<br><br><br>');
    res.write(`Your query string is: ${req.url}`);
    res.end();
}).listen(PORT);