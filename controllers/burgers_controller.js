var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions
var burgers = require("../models/burger.js");

// Creates our routes and set up logic within those route
router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burgers.all(function(data){
        res.render("index", {burgers: data});
    });
});

router.post("/burgers/create", function(req, res){
    burgers.create(["burger_name"], [req.body.burger], function(){
        res.redirect("/burgers");
    });
});

router.put("burgers/update/:id", function(req, res){
    burgers.update(req.body.devoured, req.params.id, function(){
        res.redirect("/burgers");
    });
});

router.delete("/burgers/delete/:id", function(req, res){
    burgers.delete(req.params.id, function(){
        res.redirect("/burgers");
    });
});

module.exports = router;


