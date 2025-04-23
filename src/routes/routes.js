import express from 'express';
import path from 'path';
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Ruta / ejecutada');
    res.render('inicio', { 
        productosSeleccionados: [], 
        titulo: 'TPV | Inicio' // Agrega la variable titulo
    });
});

router.get('/productos', (req, res) => {
  res.render('productos',
    {titulo: 'TPV | productos'}
  )
})

router.get('/ventas', (req, res) => {
  res.render('ventas', 
    {titulo: 'TPV | ventas'}
  )
})



export default router;