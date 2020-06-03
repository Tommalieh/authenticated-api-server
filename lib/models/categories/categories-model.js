'use strict';

const schema = require('./categories-schema.js');
const Model = require('../model');

class Category extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = new Category();