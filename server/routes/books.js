const express = require('express');
const mysql = require('mysql');

const router = express.Router();
const connectionPool = require('../database/connection-pool')

router.post('/', function(req, res){
  console.log('post body', req.body);
})

/* GET users listing. */
router.get('/', function (req, res) {

  const book = {
    'author': 'Charles Dickens',
    'title': 'Great Expectations',
    'published': '1861-01-01'
  };

  connectionPool.getPool().query('insert into books set ?', book, (err, result) => {
    if (err) throw err;

    console.log(result);
  });


  res.send('books here!');
});


module.exports = router;
