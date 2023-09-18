const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema(
    {
        OrderItems: [
            {
                Name: { type: String, required: true },
                Amount: { type: Number, required: true },
                Image: { type: String, required: true },
                Price: { type: Number, required: true },
                Product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
            },
        ],
        ShippingAddress: {
            Fullname: { type: String, required: true },
            Address: { type: String, required: true },
            City: { type: String, required: true },
            Country: { type: String, required: true },
            Phone: { type: Number, required: true },
        },
        paymentMethod: { type: String, required: true },
        ItemsPrice: { type: String, required: true },
        ShippingPrice: { type: Number, required: true },
        TaxPrice: { type: Number, required: true },
        TotalPrice: { type: Number, required: true },
        User: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        IsPaid: { type: Boolean, default: false },
        PaidAt: { type: Date },
        IsDelivered: { type: Boolean, default: false },
        DeliveredAt: { type: Date },
    },
    {
        timestamps: true,
    }
);
const order = mongoose.model('Order', orderSchema);
module.exports = order;
