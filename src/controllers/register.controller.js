const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

const { body, validationResult } = require("express-validator");

router.post(
  "",
  body("username").isLength({ min: 3 }),
  body("email").isEmail(),
  body("email").custom(async (value) => {
    const user = await User.findOne({ email: value });
    if (user) {
      throw new Error("User already exists");
    }
    return true;
  }),
  body("password").custom((value) => {
    const pattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$/;
    console.log("val", value);
    if (pattern.test(value) !== true) {
      throw new Error("Password is not strong ");
    }

    return true;
  }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      console.log("err", errors);
      if (!errors.isEmpty()) {
        return res.send({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email }).lean().exec();
      if (user) {
        return res.send("User already exists");
      }
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      // console.log(user);
      return res.status(200).send(user);
    } catch {
      res.send({ msg: err.message });
    }
  }
);
module.exports = router;
