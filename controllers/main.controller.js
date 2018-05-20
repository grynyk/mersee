const ToDo = require("../models/db");
const path    = require("path");
const bodyParser = require("body-parser");

function getUsersFromDB(req, res) {
  ToDo.find({}, (err, users) => {
    if (err) {
      res.send(404);
      res.send("User not found");
    }
    console.log(req.params);
    res.send(users);
  });
}

function getDataFromDB(req, res) {
  ToDo.find({}, (err, users) => {
    if (err) {
      res.send(404);
      res.send("User not found");
    }
    res.send(users);
  });
}



function showSingle(req, res) {
    ToDo.findOne({slug: req.params.slug},(err, data)=>{
        if(err){
            res.send(404);
            res.send('Data not found');
        }
    res.send(data);
  });
}

function showCreate(req, res) {
    res.sendFile(path.join(__dirname+'/form.html'));
}

function createData(req, res) {
    const data = new users({
        topic: req.body.topic,
        type: req.body.type,
        duration: req.body.duration,
        location: req.body.location,
        dataID: req.body.dataID,
        description: req.body.description
    });
    data.save((err)=>{
        if(err){
            throw err;
        }
  });
}

module.exports = {
  getUsersFromDB,
  getDataFromDB,
  showSingle,
  showCreate,
  createData
};
