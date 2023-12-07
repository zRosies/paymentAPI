const router = require("express").Router();
const user = require("./user.js");

router.use("/purchase", user);

module.exports = router;
