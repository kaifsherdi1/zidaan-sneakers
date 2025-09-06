const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Add new product
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, image, stock } = req.body;
    const product = await Product.create({ name, description, price, image, stock });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
