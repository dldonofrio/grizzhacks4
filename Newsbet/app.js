// Starting import libraries
var express = require("express");

var app = express();

app.use(express.static("assets"));

var request = require("request");

var bodyParser = require("body-parser");
var passport = require("passport");

var LocalStrategy = require("passport-local");

var mongoose = require("mongoose");

var indexRoutes = require("./routes/index");

var userRoutes = require("./routes/users");

var articleRoutes = require("./routes/articles");

var betRoutes = require("./routes/bets");

var User = require("./models/user");

mongoose.connect("mongodb://admin:test123@ds213832.mlab.com:13832/grizzhacks4");

app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//PASSPORT Configuration
app.use(require("express-session")({
    secret: "ugh he doesn't love me",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// trying to pass in user on all pages
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    console.log(res.locals.currentUser);
    next();
 });

// Routes
app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/articles", articleRoutes);
app.use("/bet", betRoutes);

// port listening stuff
app.listen(8080, function() {
    console.log("GOd is dead, and we have killed him");
});
