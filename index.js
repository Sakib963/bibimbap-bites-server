const express = require('express');

const app = express();

const port = process.env.port || 5000;

var cors = require('cors');

const chefData = require('./data/chefData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bibimbap Bites Server is Running');
})

app.get('/korean/chefs', (req, res) => {
    res.send(chefData);
})

app.get('/korean/chefs/:id', (req, res) => {
    const id = req.params.id;

    const chef = chefData.find(item => item.id === parseInt(id));
    
    res.send(chef);
})


app.listen(port, () => {
    console.log('Bibimbap Bites Server is Running on Port: ', port);
})