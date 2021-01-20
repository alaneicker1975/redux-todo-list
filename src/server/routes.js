const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/', (req, res) => {
  db({ query: `SELECT * FROM todos` })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {});

router.put('/', (req, res) => {});

router.patch('/:id', (req, res) => {});

router.patch('/:delete', (req, res) => {});

module.exports = router;
