// Importar el módulo Express
import express from 'express';

// Importar el Controlador
import UsuarioController from '../controllers/usuario_controller.js'

// Crear una instancia del enrutador de Express + UsuarioController
var router = express.Router();
const usuarioController = new UsuarioController();

//Desarrollamos Metodo GET - Listar Usuarios
router.get('/', async function (req, res) {
  try {
    const usuarios = await usuarioController.listarController(req, res); // Llama al controlador para listar usuarios
    console.log(usuarios)
    res.status(200).json(usuarios); // Enviar un código de estado 200 (OK) al cliente
  } catch (error) {
    res.sendStatus(404); 
  }
})

//Desarrollo de Metodo GET - Buscar Usuarios
router.get('/:id', async function (req, res) {
  try {
    const respuesta = await usuarioController.buscarController(req, res);
    res.status(200).json(respuesta); // Enviar un código de estado 200 (OK) al cliente
  } catch (error) {
    res.status(404).send("Usuario Inexistente"); 
  }
})

// Desarrollo de Método POST - Crear Usuario
router.post('/', async (req, res, next) => {
  try {
    await usuarioController.crearController(req, res);
    res.status(200).send("Usuario Creado Exitosamente"); // Enviar un código de estado 200 (OK) al cliente
  } catch (error) {
    res.sendStatus(404);
  }
});


// Desarrollo de Método DELETE - Eliminar Usuario
router.delete('/:id', async function (req, res, next) {
  try {
    await usuarioController.eliminarUsuario(req, res)
    res.status(200).send("Usuario eliminado correctamente")
  } catch (e) {
    res.status(404).send("Error: no se pudo eliminar el usuario");
  }
})

//Desarrollo de Metodo PATCH - Modificar Telefono de Usuario
router.patch('/:id', async function (req, res, next) {
  try {
    await usuarioController.modificarController(req, res)
    res.status(200).send("Telefono modificado correctamente")
  } catch (e) {
    res.status(404).send("Error: no se pudo modificar el telefono del usuario indicado");
  }
})


router.patch('/', async (req, res, next) => {
  try {
    await usuarioController.contratarServicio(req, res);
    res.status(200).send("Servicio agregado Exitosamente");
  } catch (error) {
    res.status(404).send("" + error);
  }
});

//Desarrollo de Metodo GET - Listar Servicios de Usuario
router.get('/carrito/:id', async function (req, res) {
  try {
    const respuesta = await usuarioController.serviciosContratados(req, res);
    res.status(200).json(respuesta); // Enviar un código de estado 200 (OK) al cliente
  } catch (error) {
    res.status(404).send("" + error); 
  }
});

//Desarrollo de Metodo DELETE - Eliminar Servicios de Usuario
router.delete('/carrito/:mail', async function (req, res) {
  try {
    await usuarioController.cancelarServicio(req, res);
    res.status(200).send("El servicio se elimino correctamente"); // Enviar un código de estado 200 (OK) al cliente
  } catch (error) {
    res.status(404).send("" + error); 
  }
})



export default router
