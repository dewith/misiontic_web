//console.log("Hello world from Node")
const express = require('express');
const mongoose = require('mongoose');
var routes = require('./router.js');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connection to BD
mongoose.connect('mongodb+srv://dewith:9931nakama@platziexchange.p3mnp.mongodb.net/taskDatabase?retryWrites=true&w=majority')

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server running in port 3000')
});
