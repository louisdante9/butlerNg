var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('profile', {
		title : "User Profile | Butler",
	});
});

router.get('/profile', function(req, res){
	res.render('profile', {
		title : "User Profile | Butler",
	});
});
router.get('/signup', function(req, res){
	res.render('signup', {
		title : "Sign Up | Butler",
	});
});

router.post('/signup', function(req, res){
	res.end('signup post request');
});

router.get('/signin', function(req, res){
	res.render('signin', {
		title : "Sign In | Butler",
	});
});

router.post('/signin', function(req, res){
	res.end('signin post request');
});

router.get('/book', function(req, res){
	res.render('booking', {
		title : "Book Service | Butler",
	});
});

router.post('/book', function(req, res){
	res.end('booking post request');
});

router.get('/book/:service', function(req, res){
	var service = req.params.service;
	res.end(service);
});

router.post('/book/:service', function(req, res){
	var service = req.params.service;
	res.end('booking post request');
});

function isLoggedIn(){

}

function notLoggedIn(){

}

module.exports = router;