var express = require('express'),
  app = express(),
  PORT = 8000;

app.use('/src', express.static(__dirname + '/dist/src'));
app.use('/build', express.static(__dirname + '/dist/build'));

app.get('/autocount', function (req, res) {
  res.sendfile("dist/index.html");
});

app.listen(PORT, console.info('Server is started on ' + PORT))
  .on('error', console.error);