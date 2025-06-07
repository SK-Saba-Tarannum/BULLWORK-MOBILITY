const demoService = require('../services/demo.service');

exports.bookDemo = async (req, res) => {
  const { userId, name, phone, email, address, product, message, scheduledDate } = req.body;

  try {
    const demo = await demoService.createDemoBooking({
      userId,
      name,
      phone,
      email,
      address,
      product,
      message,
      scheduledDate, 
    });

    res.status(201).json(demo);
  } catch (error) {
    console.error("Error in bookDemo controller:", error); 
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDemos = async (req, res) => {
  try {
    const demos = await demoService.getAllDemoBookings();
    res.status(200).json(demos);
  } catch (error) {
    console.error("Error in getAllDemos controller:", error); // helpful logging
    res.status(500).json({ error: error.message });
  }
};
