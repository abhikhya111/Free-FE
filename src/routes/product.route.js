const express = require("express");
const {
    viewPurchase,
    
  } = require("../controllers/user.controller");
  const router = express.Router();

router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;

