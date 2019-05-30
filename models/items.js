const ObjectID = require('mongodb').ObjectID;
var dbase = require('../db');

exports.all = function (cb) {
	dbase.get().collection('items').find().toArray(function (err, docs) {
		cb(err, docs);
	})
}

exports.findById = function (id, cb) {
	dbase.get().collection('items').findOne({ _id: ObjectID(id) }, function (err, doc) {
		cb(err, docs);
	})
}

exports.create = function (item, cb) {
	dbase.get().collection('items').insertOne(item, function(err, result) {
		cb(err, result);
	})
}

exports.update = function (id, newData, cb) {
	dbase.get().collection('items').updateOne(
		{ _id: ObjectID(id) },
		{ $set: newData},
		function (err, result) {
			cb(err, result);
		},
		{ upsert: true }
	)
}

exports.delete = function (id, cb) {
	dbase.get().collection('items').deleteOne(
		{ _id: ObjectID(id) },
		function (err, result) {
			cb(err, result);
		}
	)
}