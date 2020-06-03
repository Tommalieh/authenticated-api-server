// 'use strict';

// const express = require('express');
// const categories = require('../lib/models/categories/categories-model');
// const router = express.Router();

// router.get('/categories/', getcategories);
// router.get('/categories/:id', getcategories);
// router.post('/categories/', postcategories);
// router.put('/categories/:id', updateCategory);
// router.delete('/categories/:id', deleteCategory);

// function getcategories (req, res, next){
//   categories.read(req.params.id).then(result => {
//     let count = result.length;
//     res.json({count, result});
//   }).catch(err => {
//     next(err);
//   });
// }

// function postcategories (req, res, next){
//   categories.create(req.body).then(result => {
//     res.json({result});
//   }).catch(err => {
//     next(err);
//   });
// }

// function updateCategory (req, res, next){
//   categories.update(req.params.id, req.body).then(result => {
//     res.json({result});
//   }).catch(err => {
//     next(err);
//   });
// }

// function deleteCategory (req, res, next){
//   categories.delete(req.params.id).then(result => {
//     res.json({result});
//   }).catch(err => {
//     next(err);
//   });
// }


// module.exports = router;
