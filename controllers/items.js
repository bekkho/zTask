var Items = require('../models/items');

exports.all = function (req, res) {
	Items.all(function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
}

exports.findById = function (req, res) {
	Items.findById(req.params.id, function (err, doc) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	})
}

exports.create = function (req, res) {
	var item = {
		title: req.body.title,
		description: req.body.description,
		price: req.body.price,
		stock: req.body.stock,
		location: req.body.location
	};
	Items.create(item, function (err, result) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(item);
	})
}

exports.update = function (req, res) {
	Items.update(req.params.id, {
			title: req.body.title, 
			description: req.body.description,
			price: req.body.price,
			stock: req.body.stock,
			location: req.body.location
		}, function (err, result) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}

exports.delete = function (req, res) {
	Items.delete(req.params.id, function (err, result) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.sendStatus(200);
	})
}