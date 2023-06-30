const express = require('express');
const app = express(); 
const cors = require('cors');
const port = 5000;

const chefs = require('./chef.json');

app.use(cors());

app.get('/', (req,res) => {
    res.send('Running');
})

app.get('/chef', (req, res) => {
    res.send(chefs);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(chef => chef.id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`App is running or Port ${port}`);
})