const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255
  },
  email: {
    type: String,
    required: true,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 255
  }
});

module.exports.User = mongoose.model("user", userSchema, "users");
module.exports.userSchema = userSchema;
