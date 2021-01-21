const express = require('express');
const DB = require('./db');

const router = express.Router();
const db = new DB();

router.get('/', async (req, res) => {
  try {
    const data = await db.query({ query: `SELECT * FROM todos` });
    res.status(200).send({ data });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.query({
      query: `SELECT * FROM todos WHERE id = ?`,
      data: [id],
      isArray: false,
    });

    res.status(200).send({ data });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const { body } = req;
    const { lastID } = await db.query({
      query: 'INSERT INTO todos SET ?',
      data: body,
    });

    if (lastID) {
      res.status(200).send({});
    } else {
      res.status(500).send({ err: 'Could not insert' });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const { affectedRows } = await db.query({
      query: `UPDATE todos SET ? WHERE id = ${db.connection.escape(id)}`,
      data: body,
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

    const { affectedRows } = await db.query({
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
