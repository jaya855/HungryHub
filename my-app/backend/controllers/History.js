const Order = require("../models/Order");
const history = async (req, res) => {
  try {
    const userfound = req.params.user;
    const result = await Order.find({ email: userfound });
    const his = result.map(order => order.orderData);
    return res.status(200).json({
      success: true,
      message: "history fetched successfully",
      orderhis: his,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

module.exports = history;