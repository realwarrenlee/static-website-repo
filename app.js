const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><p>Welcome to my static website</p>');
});

module.exports = app;
