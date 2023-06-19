// Importar el módulo Express
import express from 'express';

// Importar el Controlador
import UsuarioController from '../controllers/usuario_controller.js'

// Crear una instancia del enrutador de Express + UsuarioController
var router = express.Router();
const usuarioController = new UsuarioController();

//Desarrollamos Metodo GET - Listar Usuarios
router.get('/', async function(req, res){
    try {
        const usuarios = await usuarioController.listarController(req, res); // Llama al controlador para listar usuarios
        console.log(usuarios)
        res.status(200).json(usuarios); // Enviar un código de estado 200 (OK) al cliente
      } catch (error) {
        res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
      }
})

//Desarrollo de Metodo GET - Buscar Usuarios
router.get('/:id', async function(req, res){
    try {
        const respuesta = await usuarioController.buscarController(req, res);
        res.status(200).json(respuesta); // Enviar un código de estado 200 (OK) al cliente
      } catch (error) {
        res.status(500).send("Usuario Inexistente"); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
      }
})

// Desarrollo de Método POST - Crear Usuario
router.post('/', async (req, res, next) => {
    try {
      await usuarioController.crearController(req, res);
      res.status(200).send("Usuario Creado Exitosamente" ); // Enviar un código de estado 200 (OK) al cliente
    } catch (error) {
      res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
    }
  });


  // Desarrollo de Método DELETE - Eliminar Usuario
  router.delete('/:id', async function(req,res,next){
      try{
        await usuarioController.eliminarUsuario(req,res)
        res.status(200).send("Usuario eliminado correctamente")
      }catch(e){
        res.status(500).send("Error: no se pudo eliminar el usuario");
      }
  })

  //Desarrollo de Metodo PATCH - Modificar Telefono de Usuario
  router.patch('/:id', async function (req,res,next){
    try{
      await usuarioController.modificarController(req,res)
      res.status(200).send("Telefono modificado correctamente")
    }catch(e){
      res.status(500).send("Error: no se pudo modificar el telefono del usuario indicado");
    }


  })

  export default router
