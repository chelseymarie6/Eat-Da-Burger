var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var routes = require('./controllers/burgers_controller.js');

var PORT = process.env.PORT || 3000;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", routes);

//app.listen(port);

app.listen(PORT, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });