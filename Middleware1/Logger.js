const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;


const accessLogStream = fs.createWriteStream(path.join(__dirname, 'src', 'access.log'), { flags: 'a' });

// Setup morgan to log 
app.use(morgan(':method :status :res[content-length] - :response-time ms :date[clf] :http-version :url', { stream: accessLogStream }));


app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});


app.get('/get-users', (req, res) => {
  res.status(200).json({ users: [] });
});


app.post('/add-user', (req, res) => {
  res.status(201).send('User added successfully');
});


app.put('/user/:id', (req, res) => {
  res.status(201).send(`User with ID ${req.params.id} updated successfully`);
});


app.delete('/user/:id', (req, res) => {
  res.status(200).send(`User with ID ${req.params.id} deleted successfully`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
