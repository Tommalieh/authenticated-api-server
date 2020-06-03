'use strigct';

const products = require('../lib/models/products/products-model.js');
const categories = require('../lib/models/categories/categories-model.js');


function getModel(req, res, next){
  const model = req.params.model;
  
  switch(model){
  case 'products':
    req.model = products;
    console.log(req.model);
    next();
    return;
  
  case 'categories':
    req.model = categories;
    console.log(req.model);
  
    next();
    return;
  
  default:
    next('Invalid Model Please Choose <products> or <categories>');
    return;
  }
}

module.exports = getModel;