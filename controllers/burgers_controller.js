const express = require('express');
const router = express();
const burger = require('../models/burger.js');

router.get('/', function(req, res){
	burger.selectAll(function(data){
		var hbsObj = {
			burgers: data
		};
		res.render("index", hbsObj);
	});
});

router.post('/', function(req, res){
	console.log(req.body.burger)
	burger.insertOne(req.body.burger, function(data){
		res.redirect('/');
	});
});

router.put('/api/burgers/:id', function(req, res){
	console.log(req.params.id);
	burger.updateOne(req.params.id, function(result){

		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;