var express    = require("express");
var router     = express.Router();
var User       = require("../models/user");
var Bet        = require("../models/bet");
var alert = require("alert-node");

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

router.post("/:id", function(req, res){

	var newBet = {
		article: req.body.articleScore,
	    amountBet: req.body.betInput,
	    betStatus: true,
	    intLean: req.body.myRange,
	    user: req.body.currentUser,
	}
	Bet.create(newBet, function(err, bet){
		if(err){
			console.log(err)
		} else {
			var filter = { _id: req.body.currentUser };
			console.log(req.body.currentUser);
			if (newBet.article == newBet.intLean) {		
				console.log("You won!");
				var newBalance = req.body.betInput;
				console.log(newBalance);
				alert("You won! You will gain " + newBalance + " points.");
				User.findOneAndUpdate(filter, { $inc: {balance: newBalance}}, function(err, user){
							if(err) {
								console.log(err);
							} else {
								console.log('score added')
							}
						})
			} else {
				var newBalance = -Math.abs(req.body.betInput);
				alert("You lost! You will lose " + Math.abs(newBalance) + " points.");
				User.findOneAndUpdate(filter, { $inc: {balance: newBalance}}, function(err, user){
							if(err) {
								console.log(err);
							} else {
								console.log('score subtracted')
							}
						})
			}

			
					
			res.redirect("/articles");
		}
	})

})

module.exports = router;