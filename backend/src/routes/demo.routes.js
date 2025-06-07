const express = require('express');
const router = express.Router();
const demoController = require('../controllers/demo.controller');

router.post('/', demoController.bookDemo);
router.get('/', demoController.getAllDemos);

module.exports = router;
