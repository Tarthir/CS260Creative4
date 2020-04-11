const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Items
//

const User = users.model;
const validUser = users.valid;

// This is the schema for a item
const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  id: Number,
  response: {
    type: String,
    default: "",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const Item = mongoose.model("Item", itemSchema);

// get items -- will list items that a user has submitted
router.get("/", validUser, async (req, res) => {
  let items = [];
  try {
    items = await Item.find({
    user: req.user,
    }).sort({
      created: -1,
    });
    return res.send({
      items: items,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// create a item
router.post("/", validUser, async (req, res) => {
  const item = new Item({
    user: req.user,
    id: req.body.id,
  });
  try {
    await item.save();
    return res.send({
      item: item,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// edit a item -- only edits status and response
router.put("/:id", validUser, async (req, res) => {
  // can only do this if an administrator
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }
  if (!req.body.status || !req.body.response) {
    return res.status(400).send({
      message: "status and response are required",
    });
  }
  try {
    item = await Item.findOne({
      _id: req.params.id,
    });
    item.status = req.body.status;
    item.response = req.body.response;
    await item.save();
    return res.send({
      item: item,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});
module.exports = {
  routes: router,
};
