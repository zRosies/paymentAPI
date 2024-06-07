const swaggerUI = require("swagger-ui-express");
const swaggerJson = require("../utils/swaggerDoc.json");
const route = require("express").Router();

route.use("/", swaggerUI.serve);
route.use("/", swaggerUI.setup(swaggerJson));

module.exports = route;
