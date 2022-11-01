const mongoose = require('mongoose');

const { ObjectID } = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  id: {
    type: String,
    default: ObjectID,
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

const Item = mongoose.model('ItemCollection', ItemSchema);

module.exports = Item;
