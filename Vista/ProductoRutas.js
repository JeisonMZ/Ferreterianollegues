const express = require('express');
const router = express.Router();
const Productocontrolador = require('../controlador/ProductoControlador');

router.get('/', Productocontrolador.obtenerProducto);
router.post('/', Productocontrolador.crearProducto);
router.put('/:id', Productocontrolador.actuatilzarProducto);
router.delete('/:idProducto', Productocontrolador.eliminarProducto);

module.exports = router;
