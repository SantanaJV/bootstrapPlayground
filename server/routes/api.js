const express = require("express");
const auth = require("./auth");
const game = require("./game");
const shop = require("./shop");
const router = express.Router();

router.use("/auth", auth);
router.use("/game", game);
router.use("/shop", shop);

router.get("/", (req, res) => {
  res.send("Welcome to the API route.");
});

module.exports = router;
