const express = require("express");
const dotenv = require("dotenv").config()
const connection = require("./config/db")
const UserRouter = require("./routes/user.route")
const auth = require("./middleware/Auth.middleware")

const server = express();
const PORT = process.env.PORT || 8000

server.use(express.json())
server.use('/user', UserRouter)

server.get("/", (req, res)=>{
    res.send("Hello World")
})

server.get("/dashboard", (req, res)=>{
    res.send("This is dashboard")
})

server.get("/product",auth, (req, res)=>{
    res.send("This is product")
})

server.get("/cart", auth, (req, res)=>{
    res.send("This is cart")
})

server.get("/checkout", auth, (req, res)=>{
    res.send("This is checkout")
})

server.listen(PORT, async()=>{
    try {
        await connection
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log(" Error while connecting with database ", error);
    }
    
})