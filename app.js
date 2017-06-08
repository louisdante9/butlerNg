//Include dependencies
var express = require('express');
var	http = require('http');
var	path = require('path');

var	config = require('./config/config');

//instantiating express
var app = express();

//View engine configuration
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

//Mounting express middlewere
app.use(express.static(path.join(__dirname, 'public')));

//Routes and routes handlers
app.get('/', function(req, res){
	res.end("Home Page");
});

//Starting server and listening on the server port or 3000 on a local environment.
http.createServer(app).listen(config.PORT, function() {
  	console.log(
  		'Express server listening on port ' + config.PORT
  	);
});