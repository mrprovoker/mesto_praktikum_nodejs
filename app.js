const express = require('express');
const path = require('path');

const routes = require('./routes');

const HTTP_PORT = process.env.HTTP_PORT || 3000;

const app = express();

app
  .use(express.static(path.join(__dirname, 'public')))
  .use('/', routes)
  .listen(HTTP_PORT, () => console.info(`Listening on port ${HTTP_PORT}`));
