// Importar el módulo Express
import express from 'express';

//// Importar el Controlador
import UsuarioController from '../controllers/usuario_controller.js'

// Crear una instancia del enrutador de Express
var router = express.Router();
const usuarioController = new UsuarioController();

//Desarrollamos Metodo GET - Listar Usuarios
router.get('/', async function(req, res){
    try {
      console.log("arranca")
        const usuarios = await usuarioController.listarController(req, res); // Llama al controlador para listar usuarios
        console.log(usuarios)
        console.log("llego bien")
        res.status(200).json(usuarios); // Enviar un código de estado 200 (OK) al cliente
      } catch (error) {
        res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
      }
})

//Desarrollo de Metodo GET - Buscar Usuarios
router.get('/:id', async function(req, res){
    try {
        await UsuarioController.buscarController(req, res);
        res.status(200); // Enviar un código de estado 200 (OK) al cliente
      } catch (error) {
        res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
      }
})

// Desarrollo de Método POST - Crear Usuario
router.post('/', async (req, res, next) => {
    try {
      await UsuarioController.crearController(req, res);
      res.sendStatus(200); // Enviar un código de estado 200 (OK) al cliente
    } catch (error) {
      res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
    }
  });


  // Desarrollo de Método DELETE - Eliminar Usuario
  router.delete('/:id', async function(req,res,next){
      try{
        await UsuarioController.eliminarUsuario(req,res)
        res.status(200).json({ mensaje: "Usuario eliminado correctamente" })
      }catch(e){
        res.status(500).json({ error: "Error: no se pudo eliminar el usuario" });
      }
  })

  export default router
