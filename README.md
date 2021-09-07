# README.md

4. Your API should have a GET /api/quotes/random route. This route should send back a random quote from the quotes data. The response body should have the following shape:

The response body should have the following shape:
```javascript
{
  quote: {
    quote: 'bleh bleh bleh',
    person: 'Someone BlehBleh',
  }
}
```

5. Your API should have a GET /api/quotes route. This route should return all quotes from the data if the request has no query params.

If there is a query string with a person attribute, the route should return all quotes said by the same person. For instance, the data set has multiple quotes for Grace Hopper, so GET /api/quotes?person=Grace Hopper should return an array of only those quotes. If there are no quotes for the requested person, send back an empty array.

The response body should have the following shape for all GET /api/quotes requests

```javascript
{
  quotes: [ 
    {
      "quote": "BLEH BLEH BLEH",
      "person" "Someone",
    },
  ]
}
```

6. Your API should have a POST /api/quotes route for adding new quotes to the data. New quotes will be passed in a query string with two properties: quote with the quote text itself, and person with the person who is credited with saying the quote.

This route should verify that both properties exist in the request query string and send a 400 response if it does not. If all is well, this route handler should add the new quote object to the data array and send back a response with the following shape:


6. Your API should have a POST /api/quotes route for adding new quotes to the data. New quotes will be passed in a query string with two properties: quote with the quote text itself, and person with the person who is credited with saying the quote.

This route should verify that both properties exist in the request query string and send a 400 response if it does not. If all is well, this route handler should add the new quote object to the data array and send back a response with the following shape:

```javascript
{
  quote: {/* new quote object */}
}
```

8. Add a PUT route for updating quotes in the data.
   This might require adding some sort of unique ID for each quote 
   in the array in data.js.


