var MongoClient = require('mongodb').MongoClient;

var state = {
	db: null
};

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.connect = function (url, done) {
	if (state.db) {
		return done();
	}

	MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
		if (err) {
			return done(err);
		}
		state.db = db.db('zenapi');
		done();
	})
}

exports.get = function () {
	return state.db;
}