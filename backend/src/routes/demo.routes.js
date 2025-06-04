const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demo.controller');

router.post('/book-demo', demoController.bookDemo);
router.get('/demos', demoController.getAllDemos);

module.exports = router;
