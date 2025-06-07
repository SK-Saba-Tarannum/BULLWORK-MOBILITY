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

// const fetchProductById = async (req, res) => {
//   try {
//     const product = await productService.getProductById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.status(200).json(product);
//   } catch (err) {
//     res.status(500).json({ message: 'Error fetching product', error: err.message });
//   }
// };


// const updateProduct = async (req, res) => {
//   try {
//     const product = await productService.updateProduct(req.params.id, req.body);
//     res.json(product);
//   } catch (error) {
//     console.error('Update Product Error:', error);
//     res.status(500).json({ error: 'Failed to update product' });
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     await productService.deleteProduct(req.params.id);
//     res.json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     console.error('Delete Product Error:', error);
//     res.status(500).json({ error: 'Failed to delete product' });
//   }
// }

module.exports = { addProduct, fetchProducts};
