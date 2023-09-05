const express = require("express");

const router = express.Router();
const Cart = require("../models/cart.model");
router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    return res.send(cart);
  } catch (err) {
    res.send({ msg: err.message });
  }
});
router.get("", async (req, res) => {
  try {
    const cart = await Cart.find().lean().exec();
    //  console.log(cart)
    return res.send(cart);
  } catch (err) {
    res.send({ msg: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const account = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.send(account);
  } catch (err) {
    return res.send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    if (req.query.userId) {
      console.log(req.query);
      let cart = await Cart.deleteMany({ userId: { $eq: req.query.userId } });
      console.log("saurav");
      return res.send(cart);
    } else {
      let cartData = await Cart.findByIdAndDelete({ _id: req.params.id })
        .lean()
        .exec();
      console.log("krit");
      return res.send(cartData);
    }
    // console.log("ittt",req.params.id)

    //
    // console.log('krit')

    //
  } catch (err) {
    res.send({ msg: err.message });
  }
});

module.exports = router;
