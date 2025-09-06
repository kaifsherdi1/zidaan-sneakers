const Order = require('../models/Order');

// Create order
exports.createOrder = async (req, res) => {
  try {
    const { user, products, totalAmount } = req.body;
    const order = await Order.create({ user, products, totalAmount, status: "Pending" });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get all orders (admin)
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').populate('products.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
