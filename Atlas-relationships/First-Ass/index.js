const express = require('express');

const connectionDB = require('./config/db');

const app = express();

app.use(express.json());

app.listen(3000, async() => {
    try {
        await connectionDB
        console.log("Server is running on port 3000");
    } catch (error) {
        console.log(error);
    }
  
})