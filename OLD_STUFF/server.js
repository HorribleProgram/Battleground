const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
const host = 'localhost';

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(port, () => {
  console.log(`server started at ${host}:${port}.`);
});