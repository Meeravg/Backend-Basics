const express = require('express');
const server = express();
const port = 3000;

server.use(express.json());

const validateTodo = (req, res, next) => {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;

    let errorMessage = '';

    if (typeof ID !== 'number') {
        errorMessage += 'ID must be a number. ';
    }
    if (typeof Name !== 'string') {
        errorMessage += 'Name must be a string. ';
    }
    if (typeof Rating !== 'number') {
        errorMessage += 'Rating must be a number. ';
    }
    if (typeof Description !== 'string') {
        errorMessage += 'Description must be a string. ';
    }
    if (typeof Genre !== 'string') {
        errorMessage += 'Genre must be a string. ';
    }
    if (!Array.isArray(Cast) || !Cast.every(c => typeof c === 'string')) {
        errorMessage += 'Cast must be an array of strings. ';
    }

    if (errorMessage) {
        res.status(400).json({ message: 'bad request. some data is incorrect.', notes: errorMessage.trim() });
    } else {
        next();
    }
};

// server.use(validateTodo);

// POST route
server.post('/',validateTodo, (req, res) => {
    res.status(200).send('data received');

    console.log(req.body);
});

server.get('product', (req, res) => {
    res.send("welcome to product page")
})

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
