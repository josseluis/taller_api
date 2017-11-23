var mongoose = require('mongoose');

module.exports = mongoose.model('Producto', {
	nombre: String,
	codigo: String,
	descripcion: String
});

//module.exports = mongoose.model('Producto', ProductoSchema);