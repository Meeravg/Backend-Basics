const mongoose = require('mongoose');

const url = "mongodb://127.0.0.1:27017/assignment";

const connectionDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to DB:', error);
    }
}

module.exports = connectionDB;
