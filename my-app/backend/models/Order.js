const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    orderData: {
        type: Array,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
