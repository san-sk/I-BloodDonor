var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'idonor'
})

connection.connect((err) => {

    if (!err) {
      console.log("DB connected successfully");
    }
    else {
      console.log("DB Connection Failed");
    }
  });
module.exports = connection;