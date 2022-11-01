const express = require('express');
const { Item } = require('../../db');

const router = express.Router();

// get one item
router.get('/:id', async (req, res) => {
  const item = await Item.findOne({ id: req.params.ObjectID });
  res.send(item);
});

// get all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// create one item
router.post('/:id', async (req, res) => {
  const item = new Item({
    // id: req.body.id,
    name: req.body.name,
    price: req.body.price,
    stockStatus: req.body.stockStatus,
  });
  await item.save();
  res.send(item);
});

// delete one item
// router.get('/:id', async (req, res) => {
//   const item = await Item.findOne({ id: req.params.uuid });
//   res.send(item);
// });

module.exports = router;
