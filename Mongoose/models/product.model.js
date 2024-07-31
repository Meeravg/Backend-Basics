const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: {type:Number}
});

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;
