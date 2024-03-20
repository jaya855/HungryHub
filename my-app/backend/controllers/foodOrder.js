const Order = require("../models/Order");

const foodOrder = async (req, res) => {
  try {
    const { userEmail, orderDate, userCart } = req.body;
    console.log("hello from backend foodorder")
    console.log({ userEmail, orderDate, userCart })
    // Check if the user has any existing orders
    const existingOrder = await Order.findOne({ email: userEmail });

    if (!existingOrder) {
      // If no existing order, create a new one
      const newOrder = new Order({
        email: userEmail,
        orderData: [
          {
            userDate: orderDate,
            userItem: userCart
          }
        ]
      });

      await newOrder.save();

      return res.status(200).json({
        success: true,
        message: "Order history stored successfully"
      });
    } else {
      // If existing order found, update it with new order data
      existingOrder.orderData.push({
        userDate: orderDate,
        userItem: userCart
      });

      await existingOrder.save();

      return res.status(200).json({
        success: true,
        message: "Order history updated successfully"
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

module.exports = foodOrder;
