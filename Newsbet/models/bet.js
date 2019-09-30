//COnnect to database
var mongoose = require('mongoose');

// data structure to hold the bets made
var betSchema = new mongoose.Schema({
    article: Number,
    amountBet: Number,
    betStatus: Boolean,
    intLean: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userSchema"
    }
});

//export out the bets made
module.exports = mongoose.model("Bet", betSchema);