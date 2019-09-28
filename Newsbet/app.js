// Starting import libraries
var express = require("express");

var app = express();

app.use(express.static("assets"));

var request = require("request");

var bodyParser = require("body-parser");

var mongoose = require("mongoose");

mongoose.connect("mongodb://admin:test123@ds213832.mlab.com:13832/grizzhacks4");

app.set("view engine", 'ejs');



// port listening stuff
app.listen(8080, function() {
    console.log("GOd is dead, and we have killed him");
});
