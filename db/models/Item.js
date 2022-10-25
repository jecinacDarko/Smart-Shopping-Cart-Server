const mongoose = require('mongoose');

const { Schema } = mongoose;
const { v4: uuid } = require('uuid');

const ItemSchema = new Schema({
  id: {
    type: String,
    default: uuid,
  },
  name: {
    type: String,
    default: false,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  stockStatus: {
    type: String,
    required: true,
  },
});

const Item = mongoose.model('smartCheckOutCollection', ItemSchema);

module.exports = Item;
