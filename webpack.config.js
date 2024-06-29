const path = require('path');

module.exports = {
  entry: './public/js/function.js', // Punto de entrada de tu aplicación
  output: {
    filename: 'function.js', // Nombre del archivo resultante
    path: path.resolve(__dirname, 'dist'), // Directorio de salida absoluto
  },
  mode: 'development', // Modo de desarrollo, puedes cambiar a 'production' para la producción
};
