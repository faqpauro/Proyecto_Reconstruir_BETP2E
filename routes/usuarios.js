// Importar el módulo Express
import express from 'express';
// Importar el Repositorio
import {UsuarioRepository} from '../repository/usuario_repository.js'
//// Importar el Controlador
import {UsuarioController} from '../controllers/usuario_controller.js'

// Crear una instancia del enrutador de Express
var router = express.Router();

//Desarrollamos Metodo GET - Listar Usuarios
router.get('/usuarios', async function(req, res){
    try {
        await UsuarioController.listarController(req, res); // Llama al controlador para listar usuarios
        res.sendStatus(200); // Enviar un código de estado 200 (OK) al cliente
      } catch (error) {
        res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
      }
})

//Desarrollo de Metodo GET - Buscar Usuarios
router.get('/usuarios/id', async function(req, res){
    try {
        await UsuarioController.buscarController(req, res);
        res.sendStatus(200); // Enviar un código de estado 200 (OK) al cliente
      } catch (error) {
        res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
      }
})
//export default router
