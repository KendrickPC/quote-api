const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', function(req, res, next) {
  const randomQuote = getRandomElement(quotes).quote;
  res.status(202).send( {quote: randomQuote} );
});



app.listen(PORT, () => {
  console.log(`App is listening at ${PORT} because I told it to.`)
})