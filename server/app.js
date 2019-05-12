const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const db = require('./db');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoClient.connect(db.url, { useNewUrlParser: true }, (err, database) => {
	if(err) return console.log(err);
	require('./app_routes')(app, database);
	app.listen(port, () => {
		console.log('Server is running on port 8080')
	});
})
