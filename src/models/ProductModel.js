const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, require: true },
        description: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model('Product', productSchema);
module.exports = Product;
