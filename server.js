require('dotenv').config();

const express = require('express');

const app = express();
const mongoose = require('mongoose');


const port = process.env.port || 8080;
const admin = {
    login: "admin",
    password: "admin"
};

mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log("successfull conection to database");
});

app.get('/port', (req, res)=>{
 
    res.send(admin);
})

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})

