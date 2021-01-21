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

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db({
      query: `SELECT * FROM todos WHERE id = ?`,
      data: [id],
      isArray: false,
    });

    res.status(200).send({ data });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.put('/', (req, res) => {});

router.patch('/:id', async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const cols = Object.keys(body)
      .map((col) => `${col} = ?`)
      .join(',');

    const { affectedRows } = await db({
      query: `UPDATE todos SET ${cols} WHERE id = ?`,
      data: [...Object.values(body), id],
    });

    if (affectedRows > 0) {
      res.status(200).send({});
    } else {
      res.status(500).send({ err: 'could not update' });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { affectedRows } = await db({
      query: 'DELETE FROM todos WHERE id = ?',
      data: [id],
    });

    if (affectedRows > 0) {
      res.status(200).send({});
    } else {
      res.status(500).send({ err: 'could not delete' });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

module.exports = router;
