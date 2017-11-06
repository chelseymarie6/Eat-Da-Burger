//Methods to execute MySQL commands in controllers in order to receive and store data in the database

var connection = require("../config/connection.js");

// Helper function for SQL syntax: loops through and creates an array of question marks and turns it into a string: ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax: e.g. {sleepy: true} => ["sleepy=true"]
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
}

  // Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
         var queryString = "SELECT * FROM " + tableInput + ";";
         connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            });
    },
    // vals = an array of values we want to save to cols - cols are the columns we want to insert the values into
    create: function(table, cols, vals, cb) {
            var queryString = "INSERT INTO " + table;
            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";
            console.log(queryString);
            connection.query(queryString, vals, function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    //objColVals are the columns and values to update
    update: function(table, objColVals, condition, cb) {
            var queryString = "UPDATE " + table;
            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;
            console.log(queryString);
            connection.query(queryString, function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    },
    delete: function(table, condition, cb) {
            var queryString = "DELETE FROM " + table;
            queryString += " WHERE ";
            queryString += condition;
            connection.query(queryString, function(err, result) {
                if (err) {
                    throw err;
                }
                cb(result);
            });
    }
};
// Export the orm object for the model (burger.js).
module.exports = orm;