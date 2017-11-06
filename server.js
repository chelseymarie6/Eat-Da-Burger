var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var routes = require('./controllers/burgers_controller.js');

var port = process.env.PORT || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

app.listen(port);