const express = require('express');
const connectionDB = require('./config/db');
const UserRouter = require('./Routes/user.route');
const ProductRouter = require('./Routes/product.route');


const server = express();
const PORT = 8000;

server.use(express.json());

server.use('/user', UserRouter);
server.use('/product', ProductRouter);

server.listen(PORT, async () => {
    try {
        await connectionDB();
        console.log(`Server is running on port: ${PORT}`);
    } catch (error) {
        console.log(`Server error: ${error}`);
    }
});
