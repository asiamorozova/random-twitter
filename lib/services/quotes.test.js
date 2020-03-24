const quote = require('./quotes.js');

describe('gets a quote from the API', () => {
  it('gets a quote', () => {
    return quote()
      .then(() => {
        expect.any(String);
      });
  });
});
