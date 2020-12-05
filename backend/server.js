var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var quotesController = require('./controllers/quotes');
var cors = require('cors');

var app = express();
 
app.use(cors({
	origin: '*'
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.send('Hello API');
});

app.get('/quotes', quotesController.all);

app.get('/quotes/:id', quotesController.findById);

app.post('/quotes', quotesController.create);

app.put('/quotes/:id', quotesController.update);

app.delete('/quotes/:id', quotesController.delete);

db.connect('mongodb://localhost:27017/myapi', function(err) {
	if (err) {
		return console.log(err);
	}
	app.listen(3012, function() {
		console.log('API app started');
	});
});
