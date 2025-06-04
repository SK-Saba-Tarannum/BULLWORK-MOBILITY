const demoService = require('../services/demo.service');

exports.bookDemo = async (req, res) => {
  try {
    const demo = await demoService.createDemoBooking(req.body);
    res.status(201).json(demo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDemos = async (req, res) => {
  try {
    const demos = await demoService.getAllDemoBookings();
    res.status(200).json(demos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
