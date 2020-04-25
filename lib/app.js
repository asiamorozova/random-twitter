const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/tweet', require('./routes/tweet-routes'));
app.use('/api/v1/comments', require('./routes/comment-routes'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
