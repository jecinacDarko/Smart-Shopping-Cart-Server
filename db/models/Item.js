const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuid } = require('uuid'); 

const ItemSchema = new Schema({
    uuid: {
        type: String,
        default: uuid
    },
    itemName: {
        type: String,
        default: false,
        required: true
    },
    itemPrice: {
        type: String,
        required: true
    },
    itemInStock: {
        type: String,
        required: true
    },
})

const Item = mongoose.model("Item", ItemSchema)

module.exports = Item;
