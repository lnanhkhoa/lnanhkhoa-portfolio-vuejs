const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 1211;

app.use(express.static(path.join(__dirname, "dist")));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port);
console.log(`App running at: http://localhost:${port}/`);
