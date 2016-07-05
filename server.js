var express = require('express'),
  app = express(),
  PORT = 8000;

app.get('/autocount', function (req, res) {
  res.sendfile("public/index.html");
});

app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));


app.listen(PORT, console.info('Server is started on ' + PORT))
  .on('error', console.error);
