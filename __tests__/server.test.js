'use strict';

const {server} = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('server', () => {
  it('Should respond with 404 status and send JSON of the message on invalid route', () => {
    return mockRequest.get('/cart').then(result => {
      expect(result.status).toBe(404);
    });
  });

  it('Should respond with 404 status and send JSON of the message on invalid method', () => {
    return mockRequest.delete('/api/v1/products').then(result => {
      expect(result.status).toBe(404);
    });
  });

  it('Should respond with 500 status and send JSON of the message on server error', () => {
    return mockRequest.get('/error').then(result => {
      expect(result.status).toBe(500);
    });
  });

  // it('Should respond with 200 status on a valid get request', () => {
  //   return mockRequest.get('/api/v1/products').set({'username':'hola', 'password':'12345'}).then(result => {
  //     expect(result.status).toBe(200);
  //   });
  // });

  // it('Should respond with 200 status on a valid get request', () => {
  //   return mockRequest.get('/api/v1/categories').then(result => {
  //     expect(result.status).toBe(200);
  //   });
  // });
});