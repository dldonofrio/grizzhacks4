var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Article    = require("../models/article");
var Bet = require("../models/bet");

router.post("/", function(req, res){

	var newBet = {
	    article: String,
	    amountBet: Number,
	    betStatus: Boolean,
	    intLean: Number,
	    user: 
	}
	
	Bet.create(newBet, function(err, bet){
		if(err) {
			console.log(err)
		} else {
			console.log(bet);
		}
	})

	res.redirect("/article");
});