const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', function(req, res, next) {
  res.status(200).send(getRandomElement(quotes));

})

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT} because I told it to.`)
})