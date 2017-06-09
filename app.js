//Include dependencies
var express = require('express');
var	http = require('http');
var	path = require('path');

var	config = require('./config/config');
var	routesHandler = require('./routes/main');
var	usersHandler = require('./routes/users');
var	adminHandler = require('./routes/admin');
var	partnersHandler = require('./routes/partners');

//instantiating express
var app = express();

//View engine configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Mounting express middlewere
app.use(express.static(path.join(__dirname, 'public')));

//Routes and routes handlers
app.use('/users', usersHandler);
app.use('/admin', adminHandler);
//app.use('/partners', partnersHandler);
app.use('/', routesHandler);

//Starting server and listening on the server port or 3000 on a local environment.
http.createServer(app).listen(config.PORT, function() {
  	console.log(
  		'Express server listening on port ' + config.PORT
  	);
});