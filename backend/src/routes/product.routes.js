const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticate, authorizeRoles } = require('../middlewares/auth.middleware');

router.post('/addproduct', authenticate, authorizeRoles(['ADMIN']), productController.addProduct);
router.get('/allproducts', productController.fetchProducts);


module.exports = router;
