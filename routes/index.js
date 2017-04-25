var express = require('express');
var router = express.Router();
var middleware = require('../middleware');


router.get('/', function(req, res) {
	res.render('color_game');
});

router.get('/hints', function(req, res) {
	res.render('hints');
});

module.exports = router;
