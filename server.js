// Inicialización
var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var path = require('path');
var http = require('http');
var logger = require('morgan');
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var port  	 = process.env.PORT || 8080; 			// escogemos el puerto 8080
mongoose.Promise = require('bluebird');
//var producto = require('./routes/producto');


// Configuracion
mongoose.connect('mongodb://jose:123456@ds113826.mlab.com:13826/tallerwww',{
     useMongoClient: true,promiseLibrary: require('bluebird')
  /* other options */
})
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err)); 	// mongodb://localhost:27017/TallerWWW Hacemos la conexión a la base de datos de Mongo con nombre "TallerWWW"

     
    //root    = __dirname.split('node_modules').shift() + '/frontEnd'; 
	app.use(express.static(__dirname + '/frontEnd')); 
	app.use(morgan('dev'));		
	//app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	//app.use(express.bodyParser());
	//app.use(express.methodOverride());
	app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());



// Cargamos los endpoints
require('./app/routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);