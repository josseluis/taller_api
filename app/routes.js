var Producto = require('./modelo/producto.js');
var Controller = require ('./controller.js');

module.exports = function(app) {

	// devolver todos los Producto
	app.get('/api/producto', Controller.getProducto);
	// Crear una nueva producto
	app.post('/api/producto', Controller.setProducto);
	// Modificar los datos de una Producto
	app.put('/api/producto/:producto_id', Controller.updateProducto);
	// Borrar una Producto
	app.delete('/api/producto/:producto_id', Controller.removeProducto);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./frontEnd/index.html'); // Carga única de la vista
	});
};