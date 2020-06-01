'use strict';

const logRequest = require('../middlewares/logger.js');
describe('logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach (() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach (() => {
    consoleSpy.mockRestore();
  });

  it('logs the output', () => {
    logRequest(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('moves to the next middleware', () => {
    logRequest(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
