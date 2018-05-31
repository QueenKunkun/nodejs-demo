var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  if(req.url !== '/favicon.ico') {
    var pathName = url.parse(req.url).pathname;
    console.log('pathName', pathName);
  }
  res.end();
}).listen(8000);

console.log('Server running at http://localhost:8000');