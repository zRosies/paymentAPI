const router = require("express").Router();
const purchase = require("./purchase");
const swagger = require("./swagger.js");

router.use("/api", purchase);
router.use("/swagger/doc", swagger);

module.exports = router;
