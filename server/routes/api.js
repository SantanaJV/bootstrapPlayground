const express = require("express");
const auth = require("./auth");
const game = require("./game");
const router = express.Router();

router.use("/auth", auth);
router.use("/game", game);

router.get("/", (req, res) => {
  res.send("Welcome to the API route.");
});

module.exports = router;
