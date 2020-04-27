/* eslint-disable indent */
const { Router } = require('express');
const Tweet = require('../models/tweet.js');


//create a new tweet
module.exports = Router()
  .post('/', (req, res, next) => {
    Tweet
      .create(req.body)
      .then(tweet => res.send(tweet))
      .catch(next); 
  })

//to get tweet by ID 
  .get('/:id', (req, res, next) => {
    Tweet
      .findById(req.params.id)
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  //to get all tweets
  .get('/', (req, res, next) => {
    Tweet
      .create(req.body)
      .then(tweet => Tweet.create({ tweetId: tweet._id }))
      .then(tweet => res.send(tweet))
      .catch(next);
  })

  .patch('/:id', (req, res, next) => {
      Tweet
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(tweet => res.send(tweet))
      .catch(next); 

  })
//delete by id 
  .delete('/:id', (req, res, next) => {
    Tweet
      .findByIdAndDelete(req.params.id)
      .then(tweet => res.send(tweet))
      .catch(next);
  });

  



//POST /api/v1/tweets to create a new tweet
// GET /api/v1/tweets to get all tweets
// GET /api/v1/tweets/:id to get a tweet by ID
// PATCH /api/v1/tweets/:id to update a tweets text ONLY
// DELETE /api/v1/tweets/:id to delete a tweet
