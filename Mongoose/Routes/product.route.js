const express = require('express');
const ProductRouter = express.Router();
const ProductModel = require('../models/product.model');

// Create a new product
ProductRouter.post('/create-product', async (req, res) => {
    try {
        const { name, price, quantity } = req.body;
        
        const product = new ProductModel({ name, price, quantity });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Read all products
ProductRouter.get('/get-products', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send("error while getting products ")
    }
});

// Update a product
ProductRouter.patch('/update-product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(id, req.body);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Updated Successfully', updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete a product
ProductRouter.delete('/delete-product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Deleted Successfully', deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = ProductRouter;
