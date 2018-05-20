const ToDo = require("../models/db");
const path = require("path");
const bodyParser = require("body-parser");

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

  res.sendFile(path.join(__dirname + '/update.html'));
}

function createUpdate(req, res) {
  console.log(slugOne);
  ToDo.findOne({ slug: slugOne }, (err, data) => {
    //updating that data
    data1 = {
      topic: req.body.topic,
      type: req.body.type,
      duration: req.body.duration,
      location: req.body.location,
      dataID: req.body.dataID,
      description: req.body.description
    };

    data.topic = data1.topic;
    data.type = data1.type;
    data.duration = data1.duration;
    data.location = data1.location;
    data.description = data1.description;

    data.save(function (err, updatedTank) {
      if (err) return handleError(err);
      res.send(updatedTank);
    });
  });
}

function updDataInDB(req, res) {
  console.log(req.params);
  Event.findOne({ slug: req.params.slug }, (err, data) => {
    // updating that data
    data.type = req.body.type;
    data.description = req.body.description;

    data.save((err) => {
      if (err)
        throw err;
      console.log(data);
      data.save((err) => {
        if (err) {
          throw err;
        }
      });
    });
  });
}

function showSingle(req, res) {
  ToDo.dbRequestModel.findOne({ slug: req.params.slug }, (err, data) => {
    if (err) {
      res.send(404);
      res.send('Data not found');
    }
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



module.exports = {
  getUsersFromDB,
  getDataFromDB,
  showSingle,
  showCreate,
  createData,
  updDataInDB,
  showUpdate,
  createUpdate
};
