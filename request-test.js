'use strict';

const axios = require('axios');

const book = {
    'author': 'V. S. Ramachandran',
    'title': 'Phantoms in the Brain',
    'published': '1998-01-01'
  };

axios.put('http://localhost:3000/books/119', book)
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
});