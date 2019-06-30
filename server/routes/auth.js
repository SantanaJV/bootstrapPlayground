const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User, validate } = require("../models/user");
const router = express.Router();
const authConfig = config.get("auth");

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body;

    const { error } = validate(userInfo);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne(userInfo);
    if (!user) return res.status(404).send("Invalid credentials.");

    let payload = user._id.toString();
    let token = jwt.sign(payload, authConfig.secretKey);

    res.status(200).send(token);
  } catch (err) {
    res.status(500).send("Error - Check Console.");
    console.log(err);
  }
});

router.post("/register", async (req, res) => {
  try {
    const userInfo = req.body;

    const { error } = validate(userInfo);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: userInfo.email });
    if (user)
      return res.status(400).send("User with this email already exists.");

    user = await User.findOne({ name: userInfo.name });
    if (user)
      return res.status(400).send("User with this name already exists.");

    user = new User(userInfo);
    await user.save();

    let payload = user._id.toString();
    let token = jwt.sign(payload, authConfig.secretKey);

    res.status(200).send(token);
  } catch (err) {
    res.status(500).send("Error - Check console.");
  }
});

module.exports = router;
