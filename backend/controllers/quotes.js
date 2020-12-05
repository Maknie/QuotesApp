var Quotes = require('../models/quotes');

/*
{
	"author": "Maknie",
	"genres": "motivation, study, success, money",
	"quote": "No matter how strong you are, share your problem with your friends"	
}
*/
exports.all = function(req, res) {
	Quotes.all(function(err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	});
};

exports.findById = function(req, res) {
	Quotes.findById(req.params.id, function(err, doc) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	});
};

exports.create = function(req, res) {
	var quote = {
		author: req.body.author,
		genres: req.body.genres,
		quote: req.body.quote
	};
	Quotes.create(quote, function(err, result) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(quote);
	});
};

exports.update = function(req, res) {
	Quotes.update(
		req.params.id,
		{
			name: req.body.name,
			photo: req.body.photo,
			ingredients: req.body.ingredients,
			time: req.body.time,
			quote: req.body.quote
		},
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	);
};

exports.delete = function(req, res) {
	Quotes.delete(
		req.params.id,
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		}
	);
};
