'use strict';

require('dotenv').config();
const express = require('express');
const requestTime = require('../middlewares/timestamp.js');
const logRequest = require('../middlewares/logger.js');
const serverErrorHandler = require('../middlewares/500.js');
const notFoundHandler = require('../middlewares/404.js');
const db = require('../data/db.json');

const app = express();

app.use(express.json());
app.use(requestTime);
app.use(logRequest);


app.get('/products/', (req, res) => {
  const count = db.products.length;
  const results = db.products;
  res.status(200).json({ count, results });
});

app.get('/error', (req, res) => {
  throw(Error);
});

app.get('/products/:id', (req, res) => {
  const results = db.products;
  const { id } = req.params;
  let reqProduct = results.filter(product => product.id == id);
  res.status(200).json(reqProduct);
});

app.post('/products/', (req, res) => {
  const count = db.products.length;
  const results = db.products;
  const newProduct = req.body;
  newProduct.id = db.products.length + 1;
  results.push(newProduct);
  res.status(202).json({count, results});
});

app.put('/products/:id', (req, res) => {
  const count = db.products.length;
  const results = db.products;
  const { id } = req.params;
  const newProduct = req.body;
  newProduct.id = Number(id);
  results.forEach( ( product, index ) => {
    product.id == id ? results[index] = newProduct : '';
  });
  res.status(202).json({count, results});
});

app.delete('/products/:id', (req, res) => {
  const count = db.products.length;
  const results = db.products;
  const { id } = req.params;
  const newProduct = req.body;
  newProduct.id = Number(id);
  results.forEach( ( product, index ) => {
    product.id == id ? results.splice(index, 1) : '';
  });
  res.status(202).json({count, results});
});

app.get('/categories/', (req, res) => {
  const count = db.categories.length;
  const results = db.categories;
  res.status(200).json({ count, results });
});
  
app.get('/error', (req, res) => {
  throw(Error);
});
  
app.get('/categories/:id', (req, res) => {
  const results = db.categories;
  const { id } = req.params;
  let reqCategory = results.filter(category => category.id == id);
  res.status(200).json(reqCategory);
});
  
app.post('/categories/', (req, res) => {
  const count = db.categories.length;
  const results = db.categories;
  const newCategory = req.body;
  newCategory.id = db.categories.length + 1;
  results.push(newCategory);
  res.status(202).json({count, results});
});
  
app.put('/categories/:id', (req, res) => {
  const count = db.categories.length;
  const results = db.categories;
  const { id } = req.params;
  const newCategory = req.body;
  newCategory.id = Number(id);
  results.forEach( ( category, index ) => {
    category.id == id ? results[index] = newCategory : '';
  });
  res.status(202).json({count, results});
});
  
app.delete('/categories/:id', (req, res) => {
  const count = db.categories.length;
  const results = db.categories;
  const { id } = req.params;
  const newCategory = req.body;
  newCategory.id = Number(id);
  results.forEach( ( category, index ) => {
    category.id == id ? results.splice(index, 1) : '';
  });
  res.status(202).json({count, results});
});

app.use('*', notFoundHandler);

app.use(serverErrorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};