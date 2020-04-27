const { Router } = require('express');
const Comment = require('../models/comment');

//(post/create a comment)
//(get/ get comment by id)
//(patch/ update a comment )
//delete/delete a comment 

module.exports = Router()
  .post('/', (req, res, next) => {
    Comment
      .create(req.body)
      .then(comment => res.send(comment))
      .catch(next); 
  })

  .get('/:id', (req, res, next) => {
    Comment
      .findById(req.params.id)
      .populate('tweet')
      .then(comment => res.send(comment))
      .catch(next);
  })

  .path('/:id', (req, res, next) => {
    Comment
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(comment => res.send(comment))
      .catch(next); 
  })

  .delete('/:id', (req, res, next) => {
    Comment
      .findByIdAndDelete(req.params.id)
      .then(comment => res.send(comment))
      .catch(next);
  });
  


