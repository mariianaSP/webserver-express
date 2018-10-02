const express = require('express');
const app= express();
const hbs= require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
//Express HBS engine'
app.set('view engine', 'hbs');

app.get('/', (req, res) => {	
	res.render('home', {
		nombre:'mariana sanchez p'
	});
});

app.get('/about', (req, res) => {	
	res.render('about');
});

/*app.get('/', function(req,res){
	//res.send('Hola Mundo');
	let salida ={
		nombre:'Mariana',
		edad: 24,
		url: req.url
	};
	res.send(salida);
});*/

app.listen(port, ()=>{
	console.log(`Escuchando peticiones en el puerto ${port}`);
});