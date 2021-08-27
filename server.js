'use strict';
var http = require('http'),
      fs = require('fs'),
    path = require('path'),
filePath = '',
appServer = '';
const PORT = 1337;
appServer = http.createServer(function (request, response) {
  var filePath = request.url;  // relative to its execution path
  var readFilePath = /\?/.test(filePath) ? filePath.substring(1, filePath.indexOf('?') ) : filePath.substring(1);  // To remove extra
  var fileExtName = path.extname(filePath),
      contentType = {
        'html': 'text/html',
          'js': 'application/javascript',
         'css': 'text/css',
        'json': 'application/json',
         'png': 'image/png',
         'svg': 'image/svg+xml',
         'ico': 'image/x-icon',
         'gif': 'image/gif',
         'jpg': 'image/jpeg' 
      },
      contentType =  /callback=/.test(fileExtName) ? 'application/javascript' : contentType[fileExtName.substring(1)] || 'text/html';
      fs.access(readFilePath, function(error) {
        if (!error) {
          fs.readFile(readFilePath, function(error, data) {
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
