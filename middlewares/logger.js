'use strict';

module.exports = (req, res, next) => {
  console.log(`
    Request Method: ${req.method}
    Request Path: ${req.path}
    Request Time: ${req.requestTime}
    `);
  next();
};