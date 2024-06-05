const router = require("express").Router();
const user = require("./user.js");

router.use("/api", user);

module.exports = router;
