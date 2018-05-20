require('dotenv').config();

const mainController = require('./controllers/main.controller');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const port = process.env.port || 8080;


const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect(process.env.DB_URI);
// mongoose.connect('mongodb://localhost/MyDatabase');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  
  console.log("successfull conected to database");
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./routes'));

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`);
})



passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});