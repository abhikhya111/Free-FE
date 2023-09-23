const express = require("express");
const {
    viewPurchase,
    
  } = require("../controllers/purchase.controller");
  const router = express.Router();

router.route("/:id").get(viewPurchase);

module.exports = router;

