console.log('ok');
var express = require('express')
var serveStatic = require('serve-static')

var app = express()

port = process.env.PORT || 3000;
app.use(serveStatic('app/'))
app.listen(port, function () {
  console.log('Server is listening on port: ' + port);
});

