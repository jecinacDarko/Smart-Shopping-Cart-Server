const { Item } = require("../../db");
const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");


// get one item
router.get("/items/:uuid", async (req, res) => {
    const item = await Item.findOne({ uuid: req.params.uuid });
    res.send(item);
    });

// add one item
router.post("/items/:uuid", async (req, res) => {
    const item = await Item.create(req.body);
    await item.save();
    res.send(item); 
  });

module.exports = router;