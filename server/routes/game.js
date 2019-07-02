const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");

router.post("/save", authMiddleware, async (req, res) => {
  res.status(200).send("Voilá");
});

module.exports = router;
