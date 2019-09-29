var mongoose = require("mongoose");

var articleSchema = new mongoose.Schema({
	title: String,
	url: String,
	body: String,
	source: String,
	lean: Number,
});

module.exports = mongoose.model("Article", articleSchema);
