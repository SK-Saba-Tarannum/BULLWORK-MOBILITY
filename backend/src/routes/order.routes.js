const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
const { authenticate, authorizeRoles } = require('../middlewares/auth.middleware');

router.post("/", authenticate, orderController.createOrder); 
router.get("/", orderController.getOrders);
router.get("/userorders", authenticate, orderController.getOrdersByUser);

module.exports = router;

