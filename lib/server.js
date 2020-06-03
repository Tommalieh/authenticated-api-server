'use strict';

require('dotenv').config();
const express = require('express');
const requestTime = require('../middlewares/timestamp.js');
const logRequest = require('../middlewares/logger.js');
const serverErrorHandler = require('../middlewares/500.js');
const notFoundHandler = require('../middlewares/404.js');
const cors = require('cors');
const apiRouter = require('../lib/routes/api-v1.js');
const app = express();

app.use(express.json());
app.use(requestTime);
app.use(logRequest);

app.use(cors());
app.use('/', apiRouter);


app.get('/error', (req, res) => {
  throw(Error);
});

app.use('*', notFoundHandler);
app.use(serverErrorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};