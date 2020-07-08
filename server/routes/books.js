const express = require('express');
const mysql = require('mysql');

const router = express.Router();
const connectionPool = require('../database/connection-pool')

router.get('/:id', function(req, res) {

  console.log('ID', req.params.id);
  res.sendStatus(200);
})

router.put('/:id', function(req, res) {

  console.log('body', req.body);
  res.sendStatus(200);
})

router.delete('/:id', function(req, res) {

  console.log('ID', req.params.id);
  res.sendStatus(200);
})

router.post('/', function(req, res){
  console.log('post body', req.body);

  connectionPool.getPool().query('insert into books set ?', req.body, (err, result) => {
    if (err) throw err;

    console.log(result);
  });

})

router.get('/', function (req, res) {
  res.send('books here!');
});


module.exports = router;
