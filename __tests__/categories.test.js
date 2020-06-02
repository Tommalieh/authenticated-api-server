'use strict';
require('@code-fellows/supergoose');
const categories = require('../lib/models/categories/categories-model.js');
const obj = { 
  name: 'stationary',
  display_name: 'Mobile',
  description: 'Things you can"t take anywhere',
};

describe('categories Model', () => {
  it('create', () => {
    return categories.create(obj).then(result => {
      Object.keys(obj).forEach((key) => {
        expect(result[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', () => {
    return categories.read().then(result => {
      Object.keys(obj).forEach((key) => {
        expect(result[0][key]).toEqual(obj[key]);
      });
    });
  });
  it('update', () => {
    const newObj = { 
      name: 'stationary new',
      display_name: 'Mobile new',
      description: 'Things you can"t take anywhere new',
    };
    return categories.create(obj).then(result => {
      categories.update(result._id, newObj).then(result => {
        Object.keys(newObj).forEach((key) => {
          expect(result[key]).toEqual(newObj[key]);
        });
      });
    });
  });
  it('delete', () => {
    return categories.create(obj).then(result => {
      categories.delete(result._id).then(result => {
        categories.read(result._id).then(result => {
          expect(result).toBe({});
        });
      });
    });
  });
});