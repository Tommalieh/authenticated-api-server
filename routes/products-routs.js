// 'use strict';

// const express = require('express');
// const products = require('../lib/models/products/products-model');
// const router = express.Router();

// router.get('/products/', getProducts);
// router.get('/products/:id', getProducts);
// router.post('/products/', postProducts);
// router.put('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);

// function getProducts (req, res, next){
//   products.read(req.params.id).then(result => {
//     let count = result.length;
//     res.json({count, result});
//   }).catch(err => {
//     next(err);
//   });
// }

// function postProducts (req, res, next){
//   products.create(req.body).then(result => {
//     res.json({result});
//   }).catch(err => {
//     next(err);
//   });
// }

// function updateProduct (req, res, next){
//   products.update(req.params.id, req.body).then(result => {
//     res.json({result});
//   }).catch(err => {
//     next(err);
//   });
// }

// function deleteProduct (req, res, next){
//   products.delete(req.params.id).then(result => {
//     res.json({result});
//   }).catch(err => {
//     next(err);
//   });
// }


// module.exports = router;
