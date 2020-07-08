'use strict';

const axios = require('axios');

const book = {
    'author': 'Oliver Sacks',
    'title': 'The Man Who Mistook His Wife For a Hat',
    'published': '1985-01-01'
  };

axios.post('http://localhost:3000/books', book)
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
});