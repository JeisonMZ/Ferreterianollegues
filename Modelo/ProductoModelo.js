let productos = [];

const getAllProducto = () => productos;

const getProductoById = (idProducto) =>
  productos.find(m => m.idProducto === idProducto);

const addProducto = (producto) => {
  productos.push(producto);
  return producto;
};

const updateProducto = (idProducto, data) => {
  const index = productos.findIndex(m => m.idProducto === idProducto);
  if (index === -1) return null;

  productos[index] = { ...productos[index], ...data };
  return productos[index];
};

const deleteProducto = (idProducto) => {
  const index = productos.findIndex(m => m.idProducto === idProducto);
  if (index === -1) return null;

  const eliminado = productos.splice(index, 1);
  return eliminado[0];
};

module.exports = {
  getAllProducto,
  getProductoById,
  addProducto,
  updateProducto,
  deleteProducto
};
