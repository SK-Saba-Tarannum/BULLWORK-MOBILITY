const orderService = require("../services/order.service");

exports.createOrder = async (req, res) => {
  try {
    // const userId = req.user?.id;
    const userId = req.user?.userId || req.user?.id;
 // assuming your middleware sets this
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: User ID missing' });
    }

    // const userId = req.user.id; // fetched from JWT middleware
    const data={...req.body,userId}
    console.log("Order data received:", data);  // <-- Add this log

    const order = await orderService.createOrder(data);
    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const userId = req.user?.userId || req.user?.id;
    const orders = await orderService.getOrdersByUserId(userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
