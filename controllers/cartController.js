import User from "../models/User.js";

// Add Product to Cart
export const addToCart = async (req, res) => {
  try {
    const { product, quantity } = req.body;

    const user = await User.findById(req.user._id);

    user.cart.push({
      product,
      quantity,
    });

    await user.save();

    res.json({
      success: true,
      message: "Product added to cart",
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Cart
export const getCart = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("cart.product");

    res.json({
      success: true,
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Remove Product
export const removeCartItem = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    user.cart = user.cart.filter(
      item => item._id.toString() !== req.params.id
    );

    await user.save();

    res.json({
      success: true,
      message: "Item removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};