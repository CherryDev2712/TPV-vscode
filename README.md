# TPV-vscode - Versión 1.4.0

¡Bienvenido a **TPV-vscode**! Este proyecto proporciona una solución moderna para la gestión de puntos de venta (TPV) dentro del entorno de Visual Studio Code.

## 🚀 Novedades en la Versión 1.4.0

### Funcionalidades añadidas:
- **Gestión de clientes**: Nueva vista para listar y gestionar clientes con tabla dinámica.
- **Historial de ventas mejorado**:
  - Registro de ventas con detalles adicionales como monto recibido y cambio.
  - Modal con visualización avanzada de los detalles de cada venta.
  - Generación de tickets con diseño profesional.
- **Gestión de inventario**:
  - Validaciones en categorías y productos con alertas dinámicas.
  - Persistencia de datos en `localStorage`.

### Mejoras en diseño:
- Uso de **Bootstrap 5.3.0**, **Font Awesome** y **SweetAlert2** para una experiencia visual mejorada.
- Tablas y botones estilizados para una interfaz más limpia y profesional.

### Cambios técnicos:
- Actualización del puerto del servidor a `8000` (anteriormente `3001`).
- Refactorización de rutas y vistas para mayor modularidad.

## 📂 Estructura del proyecto

- **views/**: Vistas del proyecto, incluyendo `clientes.ejs`, `inicio.ejs`, y `nav.ejs`.
- **src/routes/**: Nueva ruta para clientes.
- **localStorage**: navegacion de el local storage para clientes y ver `clientes`, y `fecha`. proccimamente el numero de el cliente.

## 💻 Requisitos del sistema

- Node.js >= 14.x
- Navegador actual con soporte para **localStorage**.

## 📦 Instalación
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/CherryDev2712/TPV-vscode.git
