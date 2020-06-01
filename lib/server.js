'use strict';

require('dotenv').config();
const express = require('express');
const requestTime = require('../middlewares/timestamp.js');
const logRequest = require('../middlewares/logger.js');
const serverErrorHandler = require('../middlewares/500.js');
const notFoundHandler = require('../middlewares/404.js');

const app = express();

app.use(express.json());
app.use(requestTime);
app.use(logRequest);

let db = {

  products:
        [
          {
            id: 1,
            category: 'mobile',
            name: 'oneplus 6',
            display_name: 'Oneplus 6',
            description: 'Best Mobile Phone Ever',
          },
          {
            id: 2,
            category: 'mobile',
            name: 'oneplus 7t',
            display_name: 'Oneplus 7t',
            description: 'Also best mobile phone ever',
          },
          {
            id: 3,
            category: 'stationary',
            name: 'Bent by mistake screen',
            display_name: 'Super cool flashy curvy amoled screen',
            description: 'A screen you can\'t take anywhere, also easily breakable',
          },
          {
            id: 4,
            category: 'stationary',
            name: 'We didn\' earn and bent another screen',
            display_name: 'Another super cool flashy curvy amoled screen',
            description: 'Another screen you can\'t take anywhere, also easily breakable',
          },
        ],

  categories:
        [
          {
            id: 1,
            name: 'mobile',
            display_name: 'Mobile',
            description: 'Things you can take anywhere',
          },
          {
            id: 2,
            name: 'stationary',
            display_name: 'Mobile',
            description: 'Things you can\'t take anywhere',
          },
        ],
};

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

app.use('*', notFoundHandler);

app.use(serverErrorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};