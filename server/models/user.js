const mongoose = require("mongoose");
const Joi = require("joi");

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
module.exports.validate = user => {
  const schema = {
    name: Joi.string()
      .max(255)
      .alphanum()
      .required(),
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
