const express = require("express");
const {
    placeOrder,
    listOrders,
    viewOrder,
    editOrder,
    approveOrder,
    disapproveOrder
  } = require("../controllers/order.controller");
  const router = express.Router();

router.route("/").get(listOrders);
router.route("/placeOrder").post(placeOrder);
router.route("/:id").get(viewOrder);
router.route("/:orderId").post(editOrder);

router.route("/approveOrder/:id").post(approveOrder);
router.route("/disapproveOrder/:id").post(disapproveOrder);

module.exports = router;

