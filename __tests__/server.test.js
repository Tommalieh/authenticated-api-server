'use strict';

const {server} = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('server', () => {
  it('Should respond with 404 status and send JSON of the message on invalid route', () => {
    return mockRequest.get('/cart').then(result => {
      expect(result.status).toBe(404);
    });
  });

  it('Should respond with 404 status and send JSON of the message on invalid method', () => {
    return mockRequest.delete('/products').then(result => {
      expect(result.status).toBe(404);
    });
  });

  it('Should respond with 500 status and send JSON of the message on server error', () => {
    return mockRequest.get('/error').then(result => {
      expect(result.status).toBe(500);
    });
  });

  it('Should respond with 200 status on a valid get request', () => {
    return mockRequest.get('/products').then(result => {
      expect(result.status).toBe(200);
    });
  });

  it('Should respond with 200 status on a valid get request', () => {
    return mockRequest.get('/categories').then(result => {
      expect(result.status).toBe(200);
    });
  });
});