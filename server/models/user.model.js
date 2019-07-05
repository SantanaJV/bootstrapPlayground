const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    max: 255
  },
  password: {
    type: String,
    required: true,
    max: 255
  },
  gameData: {
    number: Number,
    producer: [
      {
        amount: Number,
        level: Number
      }
    ]
  },
  cart: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      amount: Number
    }
  ]
});

module.exports.User = mongoose.model("User", userSchema, "users");
module.exports.userSchema = userSchema;
module.exports.validate = user => {
  const schema = {
    email: Joi.string()
      .email()
      .max(255)
      .required(),
    password: Joi.string()
      .max(255)
      .required()
  };

  return Joi.validate(user, schema);
};
