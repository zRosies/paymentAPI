const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");
const app = express();
const dotenv = require("dotenv");
const mongodb = require("./connection/db.js");
const PORT = process.env.PORT || 3000;

app
  .use(bodyParser.json())
  .use(cors({ origin: "*" }))
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", router);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to mongodb at and listening on ${PORT}`);
  }
});
