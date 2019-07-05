const express = require("express");
const mongoose = require("mongoose");
const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/cart", authMiddleware, async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    let products = user.cart;
    res.status(200).send({ products });
  } catch (err) {
    res.status(500).send("Internal error. Please try again within 5 minutes.");
    console.log(err);
  }
});

router.get("/products", async (req, res) => {
  try {
    let products = await Product.find({});
    res.status(200).send({ products });
  } catch (err) {
    res.status(500).send("Internal error. Please try again within 5 minutes.");
    console.log(err);
  }
});

router.post("/product", authMiddleware, async (req, res) => {
  try {
    let data = req.body;
    let product = new Product(data);
    await product.save();
    res.status(200).send({ res: "Sucessfully saved product." });
  } catch (err) {
    res.status(500).send("Internal error. Please try again within 5 minutes.");
    console.log(err);
  }
});

router.post("/cart", authMiddleware, async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    let products = req.body;
    products.forEach(p => {
      p.productId = new mongoose.Types.ObjectId(p.productId);
    });
    user.cart = products;
    await user.save();
    res.status(200).send({ res: "Successfully saved data. " });
  } catch (err) {
    res.status(500).send("Internal error. Please try again within 5 minutes.");
    console.log(err);
  }
});

module.exports = router;
