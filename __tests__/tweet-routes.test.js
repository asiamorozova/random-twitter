require('dotenv').config();

const request = require('supertest');
const app = require('../lib/app.js');
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const Tweet = require('../lib/models/tweet.js');


describe('app routes', () => {
    beforeAll(() => {
      connect();
    });
  
    beforeEach(() => {
      return mongoose.connection.dropDatabase();
    });
  
    afterAll(() => {
      return mongoose.connection.close();
    });

    it('gets a tweet by id', () => {
        return Tweet.create({
            
        })
    }