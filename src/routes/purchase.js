const router = require("express").Router();
const user = require("../controllers/purchase.js");
const validation = require("../utils/validation.js");
const authentication = require("../utils/authentication.js");

router.post("/purchase", authentication, validation, user.createPurchase);
router.get("/purchases", authentication, user.getPurchases);
router.get("/purchase/:id", authentication, user.getPurchaseById);
router.delete("/delete/:id", authentication, user.deletePurchaseById);

module.exports = router;
