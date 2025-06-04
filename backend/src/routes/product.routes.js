const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const { authenticate, authorizeRoles } = require('../middlewares/auth.middleware');

router.post('/addproduct', authenticate, authorizeRoles, productController.addProduct);
router.get('/allproducts', productController.fetchProducts);
router.get('/:id', productController.fetchProductById);

router.put('/:id', authenticate, authorizeRoles(['ADMIN']), productController.updateProduct);
router.delete('/:id', authenticate, authorizeRoles(['ADMIN']), productController.deleteProduct);


module.exports = router;
