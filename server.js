const { query } = require('express');
const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

// Adding ID to quotes
for (let i=0; i<quotes.length; i++) {
  quotes[i] = {
    id: i,
    ...quotes[i]
  }
}
// Shows that the ID has been added to the data items.
// console.log(quotes);

console.log(quotes);

app.get('/api/quotes/random', (req, res, next) => {
  
  const responseBody = {quote: getRandomElement(quotes) }
  console.log(responseBody);
  res.send(responseBody);
})

app.get('/api/quotes', (req, res, next) => {
  const queryPerson = req.query.person
  const requestedQuotes = [];
  if (!queryPerson) {
    res.send({quotes: quotes});
  } else {
    quotes.forEach(item => {
      if (queryPerson === item.person) {
        requestedQuotes.push(item);
      }
    })
    res.send( {quotes: requestedQuotes} );
  }
})

app.post('/api/quotes', (req, res, next) => {
  const queryQuote = req.query.quote;
  const queryPerson = req.query.person;
  
  const responseBody = {
    quote: {
      quote: queryQuote,
      person: queryPerson,
    }
  }

  if (queryPerson && queryQuote) {
    quotes.push( {
      quote: queryQuote,
      person: queryPerson,
    } );
    res.send(responseBody);
    console.log(quotes);
  } else {
    res.status(400).send("queryPerson or queryQuote properties do not exist.")
  }
})



app.put('/api/quotes/:id', (req, res, next) => {
  const id = req.params.id;
  const queryQuote = req.query.quote;
  const queryPerson = req.query.person;
  
  if (id && req.query.person && req.query.quote) {
    quotes[id] = {
      id: id,
      quote: queryQuote,
      person: queryPerson,
    }
    res.status(200).send(quotes[id]);
  } else {
    res.status(400).send("SOMETHING WENT WRONG in this PUT")
  }
})

app.delete('/api/quotes/:id', (req, res) => {
  let index = req.params.id;
  for (let i=0; i<quotes.length; i++) {
    if (quotes[i].id == index) {
      quotes.splice(quotes[i].id)
      console.log(quotes);
      res.status(200).send("SUCCESS IN DELETEION")
    } else {
      res.status(400).send("FAILED IN DELETION")
    }
  }

});

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT} because I told it to listen at this PORT # HOMIE!`)
})

