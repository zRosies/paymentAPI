const router = require("express").Router();
const user = require("../controllers/user.js");
const validation = require("../utils/validation.js");
const authentication = require("../utils/authentication.js");

router.post("/purchase", authentication, validation, user.createPurchase);
router.get("/purchase", authentication, user.getUsers);
router.get("/purchase/:id", authentication, user.getPurchaseById);
router.delete("/delete/:id", authentication, user.deletePurchaseById);

module.exports = router;
