// src/app.js
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});