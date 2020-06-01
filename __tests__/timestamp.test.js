'use strict';

const requestTime = require('../middlewares/timestamp.js');

describe('Request Time Meddleware', () => {
  it('Should add a requestTime method to the request object', () => {
    const req = {};
    const res = {};
    const next = jest.fn();

    requestTime(req, res, next);
    expect(req.requestTime).toBeDefined();
  });
});
