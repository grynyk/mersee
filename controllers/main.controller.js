const ToDo = require("../models/db");

function getUsersFromDB(req, res) {
  ToDo.find({}, (err, users) => {
    if (err) {
      res.send(404);
      res.send("User not found");
    }
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
  ToDo.find({}, (err, users) => {
    if (err) {
      res.send(404);
      res.send("User not found");
    }
    res.send(users);
  });
}

function create(req, res) {
  ToDo.find({}, (err, users) => {
    if (err) {
      res.send(404);
      res.send("User not found");
    }
    res.send(users);
  });
}

module.exports = {
  getUsersFromDB,
  getDataFromDB,
  showSingle,
  create
};
