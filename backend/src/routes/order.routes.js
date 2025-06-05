const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { authenticate, authorizeRoles } = require('../middlewares/auth.middleware');

router.post("/order", authenticate, orderController.createOrder); 
router.get("/orders", orderController.getOrders);
router.get("/userorders", authenticate, orderController.getOrdersByUser);

module.exports = router;

