const modelo = require('../modelo/ProductoModelo.js');

const obtenerProducto = (req, res) => {
  const productos = modelo.getAllProducto();
  res.json(productos);
};

const crearProducto = (req, res) => {
 const {t1 :idProducto, t2 :codigo, t3 :nombre, t4 :precio, t5 :descripcion} = req.body;

  if (modelo.getProductoById(idProducto)) {
    return res.status(400).json({ error: 'El producto ya existe' });
  }

  const nuevo = {
    idProducto,
    codigo,
    nombre,
    precio,
    descripcion
  };

  const productoCreado = modelo.addProducto(nuevo);
  res.status(201).json(productoCreado);
};

const actuatilzarProducto = (req, res) => {
  const id = req.params.idProducto;
  const data = req.body;

  const actualizado = modelo.updateProducto(id, data);
  if (!actualizado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(actualizado);
};

const eliminarProducto = (req, res) => {
  const id = req.params.idProducto;

  const eliminado = modelo.deleteProducto(id);
  if (!eliminado) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json({ mensaje: "Producto eliminado correctamente", producto: eliminado});
};

module.exports = {
 obtenerProducto,
 crearProducto,
 actuatilzarProducto,
 eliminarProducto
};
