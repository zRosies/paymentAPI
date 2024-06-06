const router = require("express").Router();
const user = require("../controllers/user.js");
const validation = require("./validation.js");

router.post("/purchase", validation, user.createPurchase);
router.get("/users", user.getUsers);
router.get("/users/:id", user.getPurchaseById);
router.delete("/delete/:id", user.deletePurchaseById);

module.exports = router;
