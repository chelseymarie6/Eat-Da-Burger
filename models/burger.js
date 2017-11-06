// Imports the ORM from orm.js to create functions that will interact with the database
var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
            orm.all("burgers", function(res) {
             cb(res);
        });
    },
    create: function(cols, vals, cb) {
            orm.create("burgers", cols, vals, function(res) {
                cb(res);
            });
    },
    update: function(objColVals, condition, cb) {
            var condition = "id = " + condition;
            var objColValsObject = {devoured: objColVals};
            orm.update("burgers", objColValsObject, condition, function(res) {
                cb(res);
            });
    },
    delete: function(condition, cb) {
            var condition = "id = " + condition;

            orm.delete("burgers", condition, function(res) {
                cb(res);
            });
    }
};
// Exports the database functions for the controller (burgers_controller.js).
module.exports = burgers;
