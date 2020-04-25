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
  beforeEach(()=> {
    return mongoose.connection.dropDatabase();
  });
  afterAll(()=> {
    return mongoose.connection.close();
  });

  //test post route 
  it('creates a comment', async() => {
    const tweet = await Tweet.create({ handle: 'Black Phillip', text: 'Wouldst thou like to live deliciously?' });

    return request(app)
      .post('/api/v1/tweet/')
      .send({ tweetId: tweet._id, handle: 'Pinhead', text: 'We have such sights to show you!' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          handle: 'Pinhead',
          text: 'We have such sights to show you!',
          __v:0
        });
      });
  });
});
