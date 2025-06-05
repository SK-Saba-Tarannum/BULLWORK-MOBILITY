const orderService = require("../services/order.service");

exports.createOrder = async (req, res) => {
  try {
    const userId = req.user?.userId || req.user?.id;
 
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: User ID missing' });
    }

    const data={...req.body,userId}
    console.log("Order data received:", data);  

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
