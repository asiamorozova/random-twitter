// function that gets a random quote from the API 

const request = require('superagent');

module.exports = (handle, text) => {
  return request
    .get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.body)
    .then(({ tweets }) => tweets);
};
