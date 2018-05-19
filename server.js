require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./db');

const port = process.env.port || 8080;

mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log("successfull conection to database");
});

app.get('/port', (req, res)=>{
    console.log(st);
    res.send('12');
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})