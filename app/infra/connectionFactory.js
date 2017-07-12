var mysql = require('mysql');

function createDBConnection(){

	return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'nodeteste_database'
		});
}


module.exports = function(){
	return createDBConnection;
}
