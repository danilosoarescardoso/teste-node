var express = require('express');

var app = express();

app.get('/produtos', function(req, res){

	res.send("<html><body>Listagem de Produtos</body>");

});

app.listen(3000, function(){
	console.log("servidor rodando");

});

