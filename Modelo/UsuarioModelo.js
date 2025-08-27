let usuarios= [];

const getAllUsuario  = () => usuarios;

const getUsuarioById = (idUsuario) =>
  usuarios.find(m => m.idUsuario === idUsuario);

const addUsuario = (usuario) => {
  usuarios.push(usuario);
  return usuario;
};

const updateUsuario = (idUsuario, data) => {
  const index = usuarios.findIndex(m => m.idUsuario === idUsuario);
  if (index === -1) return null;

  usuarios[index] = { ...usuarios[index], ...data };
  return usuarios[index];
};

const deleteUsuario = (idUsuario) => {
  const index = usuarios.findIndex(m => m.usuarios === idUsuario);
  if (index === -1) return null;

  const eliminado = usuarios.splice(index, 1);
  return eliminado[0];
};

module.exports = {
  getAllUsuario,
  getUsuarioById,
  addUsuario,
  updateUsuario,
  deleteUsuario
};
