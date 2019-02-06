var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	// connection to heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// connection to localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	})
};


connection.connect(function(err) {
  if (err) {
    console.error('Connection Unsuccessful');
    return;
}});
module.exports = connection;