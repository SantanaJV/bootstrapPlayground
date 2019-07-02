const express = require("express");
const { User } = require("../models/user");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

router.post("/save", authMiddleware, async (req, res) => {
  try {
    let gameData = req.body;
    let user = await User.findById(req.userId);
    if (!user) return res.status(401).send("Unauthorized request. Invalid ID.");
    user.gameData = gameData;

    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Internal error. Please try again within 5 minutes.");
  }
});

router.get("/load", authMiddleware, async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    if (!user) return res.status(401).send("Unauthorized request. Invalid ID.");

    res.status(200).send(user.gameData);
  } catch (err) {
    res.status(500).send("Internal error. Please try again within 5 minutes.");
  }
});

module.exports = router;
