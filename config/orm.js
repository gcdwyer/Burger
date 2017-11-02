var connection = require('./connection.js');

var orm = {
	// selects all burgers from DB
	selectAll: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result) {
			if (err) {throw err;}
			cb(result);
		});
	},
  	// inserts new burger into db
	insertOne: function(val, cb){
		var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
		connection.query(queryString, [val], function(err, result){
			if(err){throw err;}
			cb(result);
		});
	},
  	// boolean updates if burger is eaten
	updateOne: function(val, cb){
		var queryString = "UPDATE burgers SET devoured=true WHERE id=?";
		connection.query(queryString, [val], function(err, result){
			if(err){throw err;}
			cb(result);
		});
	}
}
module.exports = orm;