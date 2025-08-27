const express = require('express');
const cors = require('cors');
const app = express();
const Productorutas = require('./vista/ProductoRutas');
const UsuarioRutas = require('./vista/UsuarioRutas');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/Productos', Productorutas);
app.use('/Usuarios', UsuarioRutas);

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});