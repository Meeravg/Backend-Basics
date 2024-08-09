const express = require("express");
const UserRouter = express.Router();
const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

UserRouter.post('/register', async(req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = new UserModel({name,
             email,
            password
        })
        await user.save();
        res.status(201).json({msg: "User Registered Successfully"})
    } catch (error) {
        res.status(500).json({msg:"error while creating user", error: error.message})
    }
})

UserRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {

        const user = await UserModel.findOne({email, password})
        if(!user){
            res.status(404).json({msg: "Invalid Credentials"})
        }else{
            const token = jwt.sign({ name: 'meera' }, 'masai');
            res.status(200).json({msg: "User Logged In Successfully",
                token
            })
        }

    } catch (error) {
        res.status(500).json({msg:"error while login ", error: error.message})
    }
})

module.exports = UserRouter