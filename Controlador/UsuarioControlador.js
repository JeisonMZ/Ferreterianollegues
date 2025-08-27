const modelo = require('../modelo/UsuarioModelo.js');

const obtenerUsuario = (req, res) => {
  const usuarios = modelo.getAllUsuario();
  res.json(usuarios);
};

const crearUsuario = (req, res) => {
 const {t1 : idUsuario, t2 : documento, t3 : nombres, t4 : telefono, t5 : correo } = req.body;

  if (modelo.getUsuarioById(idUsuario)) {
    return res.status(400).json({ error: 'El usuario ya existe' });
  }

  const nuevo = {
    idUsuario,
    documento,
    nombres,
    telefono,
    correo
  };

  const usuarioCreado = modelo.addUsuario(nuevo);
  res.status(201).json(usuarioCreado);
};

const actuatilzarUsuario = (req, res) => {
  const id = req.params.idUsuario;
  const data = req.body;

  const actualizado = modelo.updateUsuario(id, data);
  if (!actualizado) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json(actualizado);
};

const eliminarUsuario = (req, res) => {
  const id = req.params.idUsuario;

  const eliminado = modelo.deleteUsuario(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json({ mensaje: "usuario eliminado correctamente", usuario: eliminado});
};

module.exports = {
 obtenerUsuario,
 crearUsuario,
 actuatilzarUsuario,
 eliminarUsuario
};