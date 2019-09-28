//COnnect to database
var mongooose = require('mongoose');

// data structure to hold the bets made
var betSchema = new mongoose.schema({
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "articleSchema"
    },
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