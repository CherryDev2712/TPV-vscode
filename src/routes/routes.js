import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('inicio',
        {titulo: 'TPV | inicio'}
    )
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
