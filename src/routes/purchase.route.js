const express = require("express");
const {
    viewPurchase,
    createPurchase
  } = require("../controllers/purchase.controller");
  const router = express.Router();

router.route("/:id").get(viewPurchase);
router.route("/:id").post(createPurchase);

module.exports = router;

