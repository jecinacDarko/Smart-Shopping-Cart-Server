const mongoose = require('mongoose');

const { Schema } = mongoose;
const { v4: uuid } = require('uuid');

const ItemSchema = new Schema({
  itemId: {
    type: String,
    default: uuid,
  },
  itemName: {
    type: String,
    default: false,
    required: true,
  },
  itemPrice: {
    type: String,
    required: true,
  },
  itemInStock: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('smartCheckOutCollection', ItemSchema);

module.exports = Item;
