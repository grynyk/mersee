require('dotenv').config();

const mainController = require('./controllers/main.controller');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.port || 8080;


mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  
  console.log("successfull conected to database");
});

app.use(require('./routes'));

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})

