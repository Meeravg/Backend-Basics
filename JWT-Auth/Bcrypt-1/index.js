const express = require("express");
const dotenv = require("dotenv").config()
const connection = require("./config/db")
const UserRouter = require("./routes/user.route")
const auth = require("./middleware/Auth.middleware")

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/user', UserRouter)

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.get("/dashboard", (req, res)=>{
    res.send("This is dashboard")
})

app.get("/product", (req, res)=>{
    res.send("This is product")
})

app.get("/cart", auth, (req, res)=>{
    res.send("This is cart")
})

app.get("/checkout", auth, (req, res)=>{
    res.send("This is checkout")
})

app.listen(PORT, async()=>{
    try {
        await connection
        console.log(`server is running on port ${PORT}`)
    } catch (error) {
        console.log(" Error while connecting with database ", error);
    }
    
})