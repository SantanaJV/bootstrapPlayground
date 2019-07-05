const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  shortDescription: String,
  description: String,
  amount: { type: Number, default: 1 },
  price: Number,
  discount: Number,
  discountExpiringDate: Date,
  specifications: [String]
});

module.exports.productSchema = productSchema;
module.exports.Product = mongoose.model("Product", productSchema, "products");
