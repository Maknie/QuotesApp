var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

exports.all = function(cb) {
	db.get().collection('quotes').find().toArray(function(err, docs) {
		cb(err, docs);
	});
};

exports.findById = function(id, cb) {
	db.get().collection('quotes').findOne({_id: ObjectID(id)}, function(err, doc) {
		cb(err, doc);
	});
};

exports.create = function(quote, cb) {
	db.get().collection('quotes').insert(quote, function(err, result) {
		cb(err, result);
	});
};

exports.update = function(id, newData, cb) {
	db.get().collection('quotes').updateOne(
		{_id: ObjectID(id)},
		newData,
		function(err, result) {
			cb(err, result);
		}
	);
};

exports.delete = function(id, cb) {
	db.get().collection('quotes').deleteOne(
		{_id: ObjectID(id)},
		function(err, result) {
			cb(err, result);
		}
	);
};
