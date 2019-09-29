var express    = require("express");
var router     = express.Router();
var User       = require("../models/user");
// var middleware = require("../middleware");



//View individual user profile


// router.get("/user", middleware.isLoggedIn, function(req, res){
// 	res.render("user", {user: req.user});

// })
console.log("Welcome to users.js")
router.get("/:id",  function(req, res){
	User.findById(req.params.id, function(err, user){
		console.log("req.params.id is" + req.params.id);
		if (err) {
			console.log(err);
		} else {
			console.log("user entry is" + user.username);
			res.render("user", {user: user});
		}
	});

});

module.exports = router;