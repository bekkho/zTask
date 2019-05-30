const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var itemsController = require('./controllers/items');

var dbase = require('./db.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ztask', function(req, res) {
	res.send("<h1>zTask - Online Shop API</h1>");
})

app.get('/ztask/items', itemsController.all);

app.get('/ztask/items/:id', itemsController.findById);

app.post('/ztask/items', itemsController.create);

app.put('/ztask/items/:id', itemsController.update);

app.delete('/ztask/items/:id', itemsController.delete);

dbase.connect('mongodb://localhost:27017/zenapi',  function (err) {
	if (err) {
		return console.log(err);
	}
	app.listen(3012, function() {
		console.log('API app started');
	})
})