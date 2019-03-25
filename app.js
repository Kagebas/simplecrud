const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/SimpleCRUD', {
    useNewUrlParser: true
});

mongoose.Promise = global.Promise;

const Produto = require('./routes/routes.js');
app.use('/produto', Produto);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));



const port = 4000;

app.listen(port, ()=> {
    console.log('Server está rodando em http://localhost: ' + port);
});

