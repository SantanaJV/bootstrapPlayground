const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
  let userInfo = req.body;
  res.status(200).send(userInfo);
});

router.post("/register", async (req, res) => {
  let userInfo = req.body;
  res.status(200).send(userInfo);
});

module.exports = router;
