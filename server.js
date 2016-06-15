var express = require('express'),
  app = express(),
  PORT = 8000;

app.get('/autocount', function (req, res) {
  res.sendfile("index.html");
});

app.listen(PORT, console.info('Server is started on ' + PORT))
  .on('error', console.error);