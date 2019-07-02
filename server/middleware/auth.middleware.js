const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const config = require("config");
const authConfig = config.get("auth");

module.exports = function(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send("Unauthorized request. No token provided.");

  let token = req.headers.authorization.split(" ")[1];
  if (token === null)
    return res.status(401).send("Unauthorized request. No token provided.");

  let payload = jwt.verify(token, authConfig.secretKey);
  if (!payload)
    return res.status(401).send("Unauthorized request. No token provided.");

  try {
    let id = new mongoose.Types.ObjectId(payload);
    if (id.toHexString() != payload)
      return res
        .status(401)
        .send("Unauthorized request. Invalid token provided.");

    req.userId = payload.subject;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized request. Invalid token provided.");
    console.log(err);
  }
};
