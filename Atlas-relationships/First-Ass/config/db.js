const mongoose = require('mongoose');

const url = "mongodb+srv://meera1:meera123@cluster0.he63fif.mongodb.net/cap10?retryWrites=true&w=majority&appName=Cluster0"

const connectionDB = mongoose.connect(url);

module.exports = connectionDB