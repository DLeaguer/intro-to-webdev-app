//node fetch http from library
var http = require('http');
//http create web server, function (request, response)
http.createServer(function (req, res) {
  //status code successful, let browser know content type is text
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //end request give back response to user 'Hello World'
  res.end('Hello World\n');
  //listen on port 8080, 127.0.0.1 refers to yourself localhost
}).listen(8080, '127.0.0.1');
//write to git bash shell
console.log('Server running at http://127.0.0.1:8080/');