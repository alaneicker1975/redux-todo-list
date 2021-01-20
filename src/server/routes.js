const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    { id: 1, title: 'Cut Grass', isComplete: false },
    { id: 2, title: 'Wash Bathrooms', isComplete: false },
    { id: 3, title: 'Paint Bedroom', isComplete: false },
    { id: 4, title: 'Walk Dogs', isComplete: false },
  ]);
});

router.get('/:id', (req, res) => {});

router.put('/', (req, res) => {});

router.patch('/:id', (req, res) => {});

router.patch('/:delete', (req, res) => {});

module.exports = router;
