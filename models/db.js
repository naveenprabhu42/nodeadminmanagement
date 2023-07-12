const mysql = require("mysql");
var config   = require("../config/config");
const mysqlConnection = mysql.createConnection(config.dbconnection);

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log("Connection Failed",err);
  }
});

module.exports = mysqlConnection;