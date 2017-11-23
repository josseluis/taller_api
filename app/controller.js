var Producto = require('./modelo/producto');

// Obtiene todos los objetos Producto de la base de datos
exports.getProducto = function (req, res){
	Producto.find(
		function(err, producto) {
			if (err)
				res.send(err)
					res.json(producto); // devuelve toos los productos en JSON		
				}
			);
} 

// Guarda un objeto Producto en base de datos
exports.setProducto = function(req, res) {

		// Creo el objeto Pproducto
		Producto.create(
			{nombre : req.body.nombre,codigo: req.body.codigo, descripcion: req.body.descripcion}, 
			function(err, producto) {
				if (err)
					res.send(err);
				// Obtiene y devuelve todos los productos tras crear uno de ellos
				Producto.find(function(err, producto) {
				 	if (err)
				 		res.send(err)
				 	res.json(producto);
				});
			});

	}

// Modificamos un objeto Producto de la base de datos
exports.updateProducto = function(req, res){
	Producto.update( {_id : req.params.producto_id},
					{$set:{nombre : req.body.nombre,codigo: req.body.codigo, descripcion: req.body.descripcion}}, 
					function(err, producto) {
						if (err)
							res.send(err);
				// Obtine y devuelve todos los producto tras crear uno de ellos
				Producto.find(function(err, producto) {
				 	if (err)
				 		res.send(err)
				 	res.json(producto);
				});
			});
	}

// Elimino un objeto Producto de la base de Datos
exports.removeProducto = function(req, res) {
	Producto.remove({_id : req.params.producto_id}, function(err, producto) {
		if (err)
			res.send(err);
			// Obtine y devuelve todos los productos tras borrar uno de ellos
			Producto.find(function(err, producto) {
				if (err)
					res.send(err)
				res.json(producto);
			});
		});
}