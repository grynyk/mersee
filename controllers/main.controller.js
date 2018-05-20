const ToDo = require("../models/db");
const path = require("path");
const bodyParser = require("body-parser");
let slugOne = {}; 

function showAuth(req, res) {
  res.sendFile(path.join(__dirname+'/auth.html'));
}

function getUsersFromDB(req, res) {
  ToDo.dbUsersModel.find({}, (err, users) => {
    if (err) {
      res.send(404);
      res.send("User not found");
    }
    console.log("getUserFromDB", req.params);
    res.send(users);
  });
}

function getDataFromDB(req, res) {
  ToDo.dbRequestModel.find({}, (err, users) => {
    if (err) {
      res.send(404);
      res.send("User not found");
    }
    res.send(users);
  });
}



function showUpdate(req, res) {
  console.log(slugOne);
  res.sendFile(path.join(__dirname+'/update.html'));
}


function createUpdate(req, res) {
  console.log(slugOne);
  ToDo.dbRequestModel.findOne({ slug: slugOne }, (err, data) => {
    //updating that data
     dataForChanges = {
      topic: req.body.topic,
      type: req.body.type,
      duration: req.body.duration,
      location: req.body.location,
      dataID: req.body.dataID,
      description: req.body.description
  };

  
  data.topic = dataForChanges.topic;
  data.type= dataForChanges.type;
  data.duration = dataForChanges.duration;
  data.location= dataForChanges.location;
  data.description = dataForChanges.description;
  



data.save(function (err, data) {
  if (err) return handleError(err);
  res.send(data);
});
});
}



function showSingle(req, res) {
  ToDo.dbRequestModel.findOne({slug: req.params.slug},(err, data)=>{
      if(err){
          res.send(404);
          res.send('Data not found');
      }
      slugOne= req.params.slug;
      console.log(slugOne);
  res.send(data);
});
}

function showCreate(req, res) {
  res.sendFile(path.join(__dirname + '/form.html'));
}

function createData(req, res) {
  const data = new ToDo({
    topic: req.body.topic,
    type: req.body.type,
    duration: req.body.duration,
    location: req.body.location,
    dataID: req.body.dataID,
    description: req.body.description
  });
  data.save((err) => {
    if (err) {
      throw err;
    }
  });
}


function showUpdate(req, res) {
  console.log(slugOne);
  res.sendFile(path.join(__dirname+'/update.html'));
}


function createUpdate(req, res) {
  console.log(slugOne);
  ToDo.dbRequestModel.findOne({ slug: slugOne }, (err, data) => {
    //updating that data
     dataForChanges = {
      topic: req.body.topic,
      type: req.body.type,
      duration: req.body.duration,
      location: req.body.location,
      dataID: req.body.dataID,
      description: req.body.description
  };

  
  data.topic = dataForChanges.topic;
  data.type= dataForChanges.type;
  data.duration = dataForChanges.duration;
  data.location= dataForChanges.location;
  data.description = dataForChanges.description;
  



data.save(function (err, data) {
  if (err) return handleError(err);
  res.send(data);
});
});
}




module.exports = {
  showAuth,
  getUsersFromDB,
  getDataFromDB,
  showSingle,
  showCreate,
  createData,
  showUpdate,
  createUpdate
};
