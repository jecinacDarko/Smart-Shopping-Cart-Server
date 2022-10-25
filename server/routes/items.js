const { v4: uuid } = require('uuid');
const express = require('express');
const { Item } = require('../../db');

const router = express.Router();

// get one item
router.get('/:uuid', async (req, res) => {
  const item = await Item.findOne({ id: req.params.uuid });
  res.send(item);
});

// create one item
router.post('/:id', async (req, res) => {
  const item = new Item({
    id: uuid(),
    name: req.body.name,
    price: req.body.price,
    stockStatus: req.body.stockStatus,
  });
  await item.save();
  res.send(item);
});

module.exports = router;
