const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },
    gender: { type: String }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
