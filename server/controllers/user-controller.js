"use strict";
const model = require("../models/user-model")

exports.createUser = (req, res) => {

  let data = req.body;

  model.createUser(data, (err, result) => {

    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send({ msg: err });
    }
  });

};

exports.getUsersList = (req, res) => {

  let data = req.query;

  model.listUsers(data, (err, result) => {
    console.log(result);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send({ msg: "no data found" });
    }
  });
};


exports.fullUsersList = (req, res) => {

  let data = req.query;

  model.fullUsersList(data, (err, result) => {
    console.log(result);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(500).send({ msg: "no data found" });
    }
  });
};


