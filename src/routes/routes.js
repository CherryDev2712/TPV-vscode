import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('inicio',
        {titulo: 'TPV | inicio'}
  );

  const jsPath = path.join(__dirname, '../views/public/js');
  req.jsPath = jsPath;
  next();
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


router.use('/public/js', (req, res, next) => {
  const jsPath = path.join(__dirname, '../views/public/js');
  req.jsPath = jsPath;
  next();
});