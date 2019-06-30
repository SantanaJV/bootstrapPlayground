const express = require("express");
const { User, validate } = require("../models/user");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    let userInfo = req.body;

    res.status(200).send(userInfo);
  } catch (err) {
    res.status(500).send("Error - Check Console.");
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

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Error - Check console.");
  }
});

module.exports = router;
