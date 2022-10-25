const { v4: uuid } = require('uuid');
const express = require('express');
const { Item } = require('../../db');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('item list');
});

router.post('/:id', async (req, res) => {
  const item = new Item({
    id: uuid(),
    name: req.body.name,
    price: req.body.price,
    stockStatus: req.body.stockStatus,
  });
  await item.save(item);
  res.json(201, { item });
});

module.exports = router;
