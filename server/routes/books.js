const express = require('express');
const mysql = require('mysql');

const router = express.Router();
const connectionPool = require('../database/connection-pool')

router.post('/', function(req, res){
  console.log('post body', req.body);

  connectionPool.getPool().query('insert into books set ?', req.body, (err, result) => {
    if (err) throw err;

    console.log(result);
  });

})

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('books here!');
});


module.exports = router;
