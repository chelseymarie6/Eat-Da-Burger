//Setups the code that connects Node to MySQL

// Require mysql
var mysql = require("mysql");

// Set up our connection information
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "burgers_db"
    //password: "",
  });
}

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;