const productService = require('../services/product.service');

const addProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error adding product', error: err.message });
  }
};

const fetchProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};


module.exports = { addProduct, fetchProducts};
