// Nodemon --> it will monitor the changes and restart the server automatically
const express = require('express');
const fs = require('fs');

const server = express();
const PORT = 8000;

server.use(express.json());

server.get("/todos", (req, res) => {
    res.send("todos Page");
});

server.get("/user-todo", (req, res) => {
    const data = fs.readFileSync('./Db.json', 'utf-8');
    res.send(data);
});

server.post("/add-todo", (req, res) => {
    let incomingData = req.body;

    const userData = fs.readFileSync('./Db.json', 'utf-8');
    const parsedData = JSON.parse(userData); // It's given data in the form of an object

    parsedData.todos_Data.push(incomingData);
    fs.writeFileSync('./Db.json', JSON.stringify(parsedData));

    console.log(parsedData);
    res.send(`Todo Added  Successfully: ${JSON.stringify(incomingData)}`);
});

// Start the server and listen on port 8000
server.listen(PORT, () => {
    console.log(`Server is  running  on port ${PORT}`);
});
