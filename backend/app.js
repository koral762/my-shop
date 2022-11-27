const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Bags } = require('./Bags');

app.use(bodyParser.json());

const port = 5000;


const mongoUrl = 'mongodb+srv://koral:aviram2020@cluster0.aysx0cm.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
    console.log("Connected to Mongo!")
})

mongoose.connection.on("error", (err) => {
    console.log("error", err)
})



app.get('/bags', (req, res) => {

    Bags.find({}).then(data => {
            res.send(data)
        }).catch(err => {
            console.log(err)
        })

});


app.get('/api/test', (req, res) => res.send({ name: 'koral', age: 30 }));

app.listen(port, () => console.log(`App listening on port ${port}`));