'use strict';

const axios = require('axios');

const book = {
    'author': 'Charles Dickens',
    'title': 'Great Expectations',
    'published': '1861-01-01'
  };

axios.post('http://localhost:3000/books', book)
.then(response => {
    console.log(error);
})
.catch(error => {
    console.log(error);
});