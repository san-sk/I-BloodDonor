"use strict";
const { json } = require('express');
const con = require('../config/db-config');



var listUsers = function (data, callback) {

  console.log(data.location, data.bloodGroup);
  let location = '%' + data.location + '%';

  let qry = "";

  if (data.bloodGroup == 0) {
    qry = 'SELECT users.id,users.name,users.email,users.phone_number,users.dob,users.location,tbl_blood_group.group_name AS bloodGroup FROM users INNER JOIN tbl_blood_group ON users.bloodGroup = tbl_blood_group.grp_id WHERE users.location LIKE ?';
  } else {
    qry = 'SELECT users.id,users.name,users.email,users.phone_number,users.dob,users.location,tbl_blood_group.group_name AS bloodGroup FROM users INNER JOIN tbl_blood_group ON users.bloodGroup = tbl_blood_group.grp_id WHERE users.location LIKE ? AND users.bloodGroup = ?';
  }

  con.query(qry, [location, data.bloodGroup], (err, result) => {

    if (!err) {
      callback(null, result);
    } else {
      callback(err, null);
    }
  });

};


var fullUsersList = function (data, callback) {

  let qry = "SELECT users.id,users.name,users.email,users.phone_number,users.dob,users.location,tbl_blood_group.group_name AS bloodGroup FROM users INNER JOIN tbl_blood_group ON users.bloodGroup = tbl_blood_group.grp_id";

  con.query(qry, (err, result) => {

    if (!err) {
      callback(null, result);
    } else {
      callback(err, null);
    }
  });

};




var createUser = function (data, callback) {

  console.log(data.phone_number);

  con.query('SELECT * FROM users WHERE users.phone_number = ?', [data.phone_number], (err, result) => {
    /* console.log(result.length > 0); */
     if(result.length > 0){
      callback("user already exists", null);
     }else{
      con.query('INSERT INTO users SET ?', data, (err, result) => {
        if (!err) {
          callback(null, result);
        } else {
          callback(err, null);
        }
      });
     }
  });

};

module.exports = {
  listUsers,
  createUser,
  fullUsersList
};