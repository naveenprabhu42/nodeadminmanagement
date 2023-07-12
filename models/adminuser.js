const mysql = require("mysql");
const mysqlConnection = require("./db");

//Admin User Table Creation
mysqlConnection.query(
    "SELECT * FROM admin_user",
    (err, results, fields) => {
      if (!err) {
        console.log(results,"results")
      } else if(err.code == "ER_NO_SUCH_TABLE"){
        var create_query = "CREATE TABLE admin_user (id int(11) unsigned NOT NULL AUTO_INCREMENT UNIQUE, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role ENUM('super_admin','admin','user') NOT NULL,status ENUM('inactive','active','deactive','cancelled') NOT NULL, primary key(id))";
        mysqlConnection.query(create_query);
      }else{
        console.log(err,"errrr");
      }
    }
  );

  //Feed Table Creation
  mysqlConnection.query(
    "SELECT * FROM feed",
    (err, results, fields) => {
      if (!err) {
        console.log(results,"results")
      } else if(err.code == "ER_NO_SUCH_TABLE"){
        var create_query_feed = "CREATE TABLE feed (id int(11) unsigned NOT NULL AUTO_INCREMENT UNIQUE, name int unsigned NOT NULL, url VARCHAR(255) NOT NULL, description VARCHAR(255), status ENUM('inactive','active','deactive','cancelled') NOT NULL, primary key(id),CONSTRAINT FK_admin_username FOREIGN KEY (name) REFERENCES admin_user(id))"
        mysqlConnection.query(create_query_feed)
      }else{
        console.log(err,"errrr")
      }
    }
  );

//User Admin Module Access Creation
//   mysqlConnection.query(
//     "SELECT * FROM admin_user_access",
//     (err, results, fields) => {
//       if (!err) {
//         console.log(results,"results")
//       } else if(err.code == "ER_NO_SUCH_TABLE"){
//         var create_query_admin_module = "CREATE TABLE admin_user_access (id int(11) unsigned NOT NULL AUTO_INCREMENT UNIQUE, name int unsigned NOT NULL, url VARCHAR(255) NOT NULL, description VARCHAR(255), status ENUM('inactive','active','deactive','cancelled') NOT NULL, primary key(id),CONSTRAINT FK_admin_username FOREIGN KEY (name) REFERENCES admin_user(id))"
//         mysqlConnection.query(create_query_feed)
//       }else{
//         console.log(err,"errrr")
//       }
//     }
//   );