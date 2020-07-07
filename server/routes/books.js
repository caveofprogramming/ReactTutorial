const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const db = require('../config/db');

console.log(db.user, db.password);

/* GET users listing. */
router.get('/', function(req, res, next) {

  const conn = mysql.createConnection(db);
  
  conn.connect(err => {
    if(err) throw err;

    console.log('Connected');
  });

  res.send('books here!');
});


module.exports = router;
