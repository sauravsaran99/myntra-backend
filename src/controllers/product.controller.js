const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("", async (req, res) => {
  try {
    // console.log(req.query.category, req.query.brand, 'a')
    if (req.query.category == undefined && req.query.brand == undefined) {
      const products = await Product.find().lean().exec();

      return res.send(products);
    } else if (req.query._sort && req.query.order) {
      console.log(req.query);
    } else {
      const products = await Product.find({
        $and: [{ category: req.query.category }, { brand: req.query.brand }],
      });
      // console.log(req.query.brand,req.query.category)
      // console.log("que",req.query)
      // console.log("prod",products)
      return res.send(products);
    }
  } catch (err) {
    res.send({ msg: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const user = await Product.findById(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});
module.exports = router;
