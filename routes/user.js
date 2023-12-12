const router = require("express").Router();
const user = require("../controllers/user.js");

router.post("/", user.createPurchase);
router.get("/", user.getUsers);
router.get("/:id", user.getPurchaseById);

module.exports = router;
