'use strict';

const express = require('express');
const getModel = require('../../middlewares/model-finder.js');

const router = express.Router();

router.param('model', getModel);

router.get('/:model', getHandler);
router.get('/:model/:id', getHandler);
router.post('/:model', postHandler);
router.put('/:model/:id', updateHandler);
router.delete('/:model/:id', deleteHandler);

function getHandler (req, res, next){
  req.model.read(req.params.id).then(result => {
    let count = result.length;
    res.json({count, result});
  }).catch(err => {
    next(err);
  });
}
  
function postHandler (req, res, next){
  req.model.create(req.body).then(result => {
    res.json({result});
  }).catch(err => {
    next(err);
  });
}
  
function updateHandler (req, res, next){
  req.model.update(req.params.id, req.body).then(result => {
    res.json({result});
  }).catch(err => {
    next(err);
  });
}
  
function deleteHandler (req, res, next){
  req.model.delete(req.params.id).then(result => {
    res.json({result});
  }).catch(err => {
    next(err);
  });
}


module.exports = router;