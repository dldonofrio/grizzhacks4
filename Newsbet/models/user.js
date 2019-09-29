var mongoose                 = require("mongoose");
var passportLocalMonggose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:  String,
    password:  String,
    balance:   Number,
    // amntWon:   Number,
    // amntLose:  Number,
    // totalWins: Number,
    // totalLose: Number,
});

UserSchema.plugin(passportLocalMonggose);

module.exports = mongoose.model("User", UserSchema);