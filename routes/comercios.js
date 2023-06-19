// Importar el módulo Express
import express from 'express';

// Importar el Controlador
import ComercioController from '../controllers/comercio_controller.js';

// Crear una instancia del enrutador de Express + ComercioController
var router = express.Router();
const comercioController = new ComercioController();

//Desarrollamos Metodo GET - Listar Comercios
router.get('/', async function(req, res){
  try {
      const comercios = await comercioController.listarController(req, res); // Llama al controlador para listar comercios
      res.status(200).json(comercios); // Enviar un código de estado 200 (OK) al cliente
    } catch (error) {
      res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
    }
})

//Desarrollo de Metodo GET - Buscar Comercios
router.get('/:id', async function(req, res){
  try {
      const respuesta = await comercioController.buscarController(req, res);
      res.status(200).json(respuesta); // Enviar un código de estado 200 (OK) al cliente
    } catch (error) {
      res.status(500).send("Comercio Inexistente"); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
    }
})

// Desarrollo de Método POST - Crear Comercio
router.post('/', async (req, res, next) => {
  try {
    await comercioController.crearController(req, res);
    res.status(200).send("Comercio Creado Exitosamente" ); // Enviar un código de estado 200 (OK) al cliente
  } catch (error) {
    res.status(500).json({ error: error.message }); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
  }
});

// Desarrollo de Método DELETE - Eliminar Comercio
router.delete('/:id', async function(req,res,next){
  try{
    await comercioController.eliminarController(req,res)
    res.status(200).send("Comercio eliminado correctamente")
  }catch(e){
    res.status(500).send("Error: no se pudo eliminar el comercio");
  }
})

//Desarrollo de Metodo PATCH - Modificar Telefono de Comercios
router.patch('/:id', async function (req,res,next){
  try{
    await comercioController.modificarController(req,res)
    res.status(200).send("Teléfono modificada correctamente")
  }catch(e){
    res.status(500).send("Error: no se pudo modificar el teléfono del comercio indicado");
  }


})

export default router
