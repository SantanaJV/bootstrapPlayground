const express = require("express");
const auth = require("./auth");
const router = express.Router();

router.use("/auth", auth);

router.get("/", (req, res) => {
  res.send("Welcome to the API route.");
});

module.exports = router;
