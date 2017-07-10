
module.exports = function(app){ 
	app.get('/produtos', function(req, res){
		var mysql = require('mysql');

		var connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'nodeteste_database'
		});

		connection.query('select * from livros', function(err, results){
			res.send(results);
		});

		connection.end();

		//consulta
		res.render("produtos/lista");
	});
}