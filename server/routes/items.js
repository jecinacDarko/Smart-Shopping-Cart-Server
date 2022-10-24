const { Item } = require("../../db");
const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

// get one item
router.get('items/:id', async (req, res) => {
  const { id } = request.params;
  console.log(request.params)
  const item = await presidents.find(item => item.id === 1);
  res.send(item);
});

// add one item
app.post('/items/:id', (req, res) => {
  const { item } = request.body;
  const nextItemId = uuid(item);
  const id = nextPresidentId.toString();
  if (!from || !to || !name) return response.location('/api/presidents/').status(400).send();
}

module.exports = router; 