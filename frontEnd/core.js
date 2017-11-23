angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newProductos = {};
	$scope.productos = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/producto').success(function(data) {
		$scope.productos = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar un producto
	$scope.registrarProducto = function() {
		$http.post('/api/producto', $scope.newProducto)
		.success(function(data) {
				$scope.newProducto = {}; // Borramos los datos del formulario
				$scope.productos = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de un producto
	$scope.modificarProducto = function(newProducto) {
		$http.put('/api/producto/' + $scope.newProducto._id, $scope.newProducto)
		.success(function(data) {
				$scope.newProducto = {}; // Borramos los datos del formulario
				$scope.productos = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto producto conocido su id
	$scope.borrarProducto = function(newProducto) {
		$http.delete('/api/producto/' + $scope.newProducto._id)
		.success(function(data) {
			$scope.newProducto = {};
			$scope.productos = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para escoger el objeto seleccionado en la tabla
	$scope.selectProduct = function(producto) {
		$scope.newProducto = producto;
		$scope.selected = true;
		console.log($scope.newProducto, $scope.selected);
	};
}