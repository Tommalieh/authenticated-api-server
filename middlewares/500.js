'use strict';

module.exports = ( (err, req, res, next) => {
  // req.params.id && req.params.id >
  res.status(500);
  res.statusMessage = `Server Error`;
  res.json({error: err});
});