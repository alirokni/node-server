'use strict';
var  sys = require('util'),
    http = require('http'),
      fs = require('fs'),
    path = require('path'),
filePath = '',
appServer = '';
const PORT = 1337;
appServer = http.createServer(function (request, response) {
  filePath = request.url.substring(1);  // To remove extra / in path 
  var fileExtName = path.extname(filePath),
      contentType = {
        'html': 'text/html',
          'js': 'text/javascript',
         'css': 'text/css',
        'json': 'text/json',
         'png': 'image/png',
         'svg': 'image/svg+xml',
         'ico': 'image/x-icon',
         'gif': 'image/gif'
      },
      contentType = contentType[fileExtName.substring(1)] || 'text/html';
      fs.access(filePath, function(error) {
        if (!error) {
          fs.readFile(filePath, function(error, data) {
            if (error) {
              response.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'});
              response.write('500 - Interanl Service Error \n' + error );
              response.end();
              return;
            } else {
              response.writeHead(200, { 'Content-Type': contentType});
              if( contentType === 'image/png' || contentType === 'image/x-icon' ){
                response.write(new Buffer(data));
              } else {
                response.write(data, "utf8");
              }
              response.end();
              return;
            }
          });
        } else {
          console.log("Not Found " + error);
          response.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
          response.write('404 Not Found\n');
          response.end();
          return;
        }
      });
});
appServer.listen(PORT, "localhost");
console.log('Server running at http://127.0.0.1:' + PORT + '/');
