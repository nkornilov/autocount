var express = require('express'),
  app = express(),
  PORT = 8000;

app.get('/autocount', function (req, res) {
  res.sendfile("public/index.html");
});

app.use('/', express.static(__dirname + '/public'));

app.listen(PORT, console.info('Server is started on ' + PORT))
  .on('error', console.error);