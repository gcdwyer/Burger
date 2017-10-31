// Import MySQL connection.
var connection = require("../connection.js");

// Create the methods that will execute the necessary MySQL commands in the controllers
var orm = {
	// Select all burgers
	selectAll: function(tableInput, cb){

		var queryString = "SELECT * FROM " + tableInput + ";";

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// Insert a burger
	insertOne: function(val, cb){

		var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";

		connection.query(queryString, [val], function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	},
	// Update a burger
	updateOne: function(val, cb) {

        var queryString = "UPDATE burgers SET devoured=true WHERE id=?";

        console.log(queryString);
        connection.query(queryString, [val], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

// export ORM object
module.exports = orm;