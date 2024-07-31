const express = require('express');
const UserRouter = express.Router();
const UserModel = require('../models/user.model');

// Read all users
UserRouter.get('/get-users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Create a new user
UserRouter.post('/create-user', async (req, res) => {
    const { name, age, gender } = req.body;
    try {
        let user = await UserModel.findOne({ name });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        let newUser = new UserModel({ name, age, gender });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Update a user
UserRouter.patch('/update-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await UserModel.findByIdAndUpdate({_id:id}, req.body);
       
        res.status(200).json({ message: 'Updated Successfully', updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Delete a user
UserRouter.delete('/delete-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'Deleted Successfully', deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = UserRouter;
