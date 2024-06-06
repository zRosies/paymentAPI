const router = require("express").Router();
const user = require("../controllers/user.js");

router.post("/purchase", user.createPurchase);
router.get("/users", user.getUsers);
router.get("/users/:id", user.getPurchaseById);
router.delete("/delete/:id", user.deletePurchaseById);

module.exports = router;
