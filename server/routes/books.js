const express = require('express');
const mysql = require('mysql');

const router = express.Router();
const connectionPool = require('../database/connection-pool');
const BookRepository = require('../database/book-repository');

let repository = new BookRepository(connectionPool);

router.get('/:id', function (req, res) {

  console.log('ID', req.params.id);
  res.sendStatus(200);
})

// Update a book
router.put('/:id', function (req, res) {
  repository.update(req.params.id, req.body, (err, result) => {
    if (err) {
      res.status(500).json({ 'error': err.toString() });
    }
    else {
      res.sendStatus(200);
    }
  });
})

router.delete('/:id', function (req, res) {

  console.log('ID', req.params.id);
  res.sendStatus(200);
})

// Save a book
router.post('/', function (req, res) {
  repository.save(req.body, (err, result) => {
    if (err) {
      res.status(500).json({ 'error': err.toString() });
    }
    else {
      res.sendStatus(200);
    }
  });
})

router.get('/', function (req, res) {
  res.send('books here!');
});


module.exports = router;
