'use strict';
require('@code-fellows/supergoose');
const products = require('../lib/models/products/products-model.js');
const obj = { 
  category: 'stationary',
  name: 'Bent by mistake screen',
  display_name: 'Super cool flashy curvy amoled screen',
  description: 'A screen you can"t take anywhere, also easily breakable',
};

describe('Products Model', () => {
  it('create', () => {
    return products.create(obj).then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', () => {
    return products.read().then((result) => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });
  it('update', () => {
    const newObj = { 
      category: 'stationary new',
      name: 'Bent by mistake screen new',
      display_name: 'Super cool flashy curvy amoled screen new',
      description: 'A screen you can"t take anywhere, also easily breakable',
    };
    return products.create(obj).then(result => {
      products.update(result._id, newObj).then(result => {
        Object.keys(newObj).forEach((key) => {
          expect(result[key]).toEqual(newObj[key]);
        });
      });
    });
  });
  it('delete', () => {
    return products.create(obj).then(result => {
      products.delete(result._id).then(result => {
        products.read(result._id).then(result => {
          expect(result).toBe({});
        });
      });
    });
  });
});
