const express = require('express');
const db = require('./db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await db({ query: `SELECT * FROM todos` });
    res.status(200).send({ data });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.get('/:id', (req, res) => {});

router.put('/', (req, res) => {});

router.patch('/:id', (req, res) => {});

router.patch('/:delete', (req, res) => {});

module.exports = router;
