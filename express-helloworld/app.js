var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', (req, res) => {
  res.send('Hello Mars!\n');
});

const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);

