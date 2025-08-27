const express = require('express');
const router = express.Router();
const UsuarioControlador = require('../controlador/UsuarioControlador');

router.get('/', UsuarioControlador.obtenerUsuario);
router.post('/', UsuarioControlador.crearUsuario);
router.put('/:id', UsuarioControlador.actuatilzarUsuario);
router.delete('/:idUsuario', UsuarioControlador.eliminarUsuario);

module.exports = router;
