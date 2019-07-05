const express = require("express");
const { Product } = require("../models/product.model");
const { User } = require("../models/user.model");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/cart", authMiddleware, async (req, res) => {
  try {
    let user = await User.findById(req.userId);
    let products = user.products;
    console.log(products);
    res.status(200).send({ res: "success" });
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
    console.log(products);
    user.cart.push(products);
    console.log(user.cart);
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("Internal error. Please try again within 5 minutes.");
    console.log(err);
  }
});

module.exports = router;
