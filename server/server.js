const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const api = require("./routes/api");

const dbConfig = config.get("db");
const serverConfig = config.get("server");

mongoose.connect(dbConfig.uri, { useNewUrlParser: true }, err => {
  if (err) throw new Error(err);
  console.log("Connected to MongoDB Cloud.");
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);

app.get("/", (req, res) => {
  res.send("Welcome to the server.");
});

app.listen(serverConfig.port, () => {
  console.log(`Listening on port ${serverConfig.port}.`);
});
