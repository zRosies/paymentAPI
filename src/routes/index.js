const router = require("express").Router();
const user = require("./user.js");
const swagger = require("./swagger.js");

router.use("/api", user);
router.use("/swagger/doc", swagger);

module.exports = router;
