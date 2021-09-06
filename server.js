const { query } = require('express');
const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res, next) => {
  
  const responseBody = {quote: getRandomElement(quotes) }
  console.log(responseBody);
  res.send(responseBody);
})

app.get('/api/quotes', (req, res, next) => {
  const queryPerson = req.query.person
  const requestedQuotes = [];
  if (!queryPerson) {
    res.send(quotes);
  } else {
    quotes.forEach(item => {
      if (queryPerson === item.person) {
        requestedQuotes.push(item);
      }
    })
    res.send( {quotes: requestedQuotes} );
  }
})



app.listen(PORT, () => {
  console.log(`App is listening at ${PORT} because I told it to listen at this PORT # HOMIE!`)
})

