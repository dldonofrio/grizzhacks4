var express = require("express");
var router = express.Router();
var request = require("request");
var Article    = require("../models/article");

router.get("/", function(req, res){

	// var article_url = "https://dailycaller.com/2019/09/26/mike-murphy-romney-aide-30-republican-senators-impeachment-secret-vote/";
	// var api_key = "227c877c0e85e4595aaa44e4c2433a64";
	// var api_url = "https://api.diffbot.com/v3/article?token=" + api_key + "&url=" + article_url;

	// request(api_url, function(error, response, body){
	// 	if(!error && response.statusCode === 200){
	// 		response = JSON.parse(body);

	// 		var source = response.objects[0].siteName;
	// 		var title = response.objects[0].title;
	// 		var text = response.objects[0].text;

	// 		var newArticle = {
	// 			title: title,
	// 			url: article_url,
	// 			body: text,
	// 			source: source,
	// 			lean: 4
	// 		}	

	// 		Article.create(newArticle, function(err, article){
	// 			if(err){
	// 				console.log(err);
	// 			} else {
	// 				console.log(article);
	// 				console.log("added to articles");
	// 			}
	// 		});

	// 	}
	// });

	Article.find({}, function(err, articles){
		if(err){
			console.log(err);
		} else {
			console.log("rendering articles.ejs")
			res.render("articles", {articles: articles});
		}
	})
	
})

module.exports = router;