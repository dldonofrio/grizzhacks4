var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
//=============================================================================
// Root Route
//=============================================================================
//Root route & landing page
router.get("/", function(req, res){
	res.render("login");
});
//=============================================================================
// Auth Routes
//=============================================================================
// show register form

// router.get("/articles", function(req, res){
// 	res.render("articles");
// });

router.get("/register", function(req, res){
	res.render("register");
});
// handle sign up logic
router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username, password: req.body.password});
	console.log(newUser);
	// if (req.body.adminCode === 'mySuperSecretAdminCode') {
	// newUser.isAdmin = true;
// }
User.register(newUser, req.body.password, function(err,user){
	if(err){
		return res.render("register", {"error": err.message});
	}
	passport.authenticate("local")(req, res, function(){
		console.log("success", "Enjoy your first article " + user.username);
		res.redirect("/articles");
		});
	});
});

//show login form
router.get("/login", function(req, res){
	res.render("login");
});
//handling login logic
router.post("/login", passport.authenticate("local",
	{ successRedirect: "/articles",
	failureRedirect: "/login"
	}), function(req, res){
});
//show logout form
router.get("/logout", function(req, res){
	req.logout();
	console.log("success", "Logged you out");
	res.redirect("/login");
});

module.exports = router;