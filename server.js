import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import routes from './src/routes/routes.js'; // Importar rutas

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000; // Use environment variable or fallback to 3001

// Configuración de middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para formularios HTML

// Servir archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, '/views/modulos/css')));

// Configuración de motor de plantillas (EJS)
app.set('view engine', 'ejs'); // Motor EJS
app.set('views', path.join(__dirname, 'views')); // Carpeta de vistas

// Usar rutas importadas
app.use('/', routes);

// Manejo de errores para rutas no encontradas (404)
app.use((req, res) => {
  res.render('error',
    {titulo: 'error'}
  )
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor test ejecutando en http://localhost:${PORT}`);
});