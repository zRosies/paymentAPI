const router = require("express").Router();
const user = require("../controllers/user.js");

router.post("/", user.createPurchase);

module.exports = router;
