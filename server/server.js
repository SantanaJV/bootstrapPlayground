const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server.");
});

app.listen(3000, () => {
  console.log("Listening on port 3000.");
});
