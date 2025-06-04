// const express = require('express');
// const router = express.Router();
// const orderController = require('../controllers/order.controller');
// // const authenticate = require('../middleware/authMiddleware'); // ✅ FIX: Import authenticate middleware
// const { authenticate} = require('../middlewares/auth.middleware');

// router.post('/order', orderController.createOrder);
// router.get('/orders', orderController.getOrders);
// // router.get('/orders/user/:userId', orderController.getOrdersByUser);
// router.get('/userorders', authenticate, orderController.getOrdersByUser); // Use authenticate middleware to ensure the user is logged in

// module.exports = router;




const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");
// const { authenticate } = require("../middlewares/auth.middleware");
const { authenticate, authorizeRoles } = require('../middlewares/auth.middleware');

router.post("/order", authenticate, orderController.createOrder); // protect this route
router.get("/orders", orderController.getOrders);
router.get("/userorders", authenticate, orderController.getOrdersByUser);

module.exports = router;

