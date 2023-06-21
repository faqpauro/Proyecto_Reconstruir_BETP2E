// Importar el módulo Express
import express from 'express';

// Crear una instancia del enrutador de Express
var router = express.Router();

/* GET home page. */
// Definir una ruta GET para la página de inicio
router.get('/', function(req,res){
    // Renderizar la vista 'index' y pasar el objeto de datos { title: 'Express' }
    res.render('index', { title: 'Express' });
});

// Exportar el enrutador para que pueda ser utilizado en otros archivos
export default router;


