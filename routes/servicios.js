// Importar el módulo Express
import express from 'express';

// Importar el Controlador
import ServicioController from '../controllers/servicio_controller.js';

// Crear una instancia del enrutador de Express + ServicioController
var router = express.Router();
const servicioController = new ServicioController();

//Desarrollamos Metodo GET - Listar Servicios
router.get('/', async function(req, res){
  try {
      const servicios = await servicioController.listarController(req, res); // Llama al controlador para listar servicios
      res.status(200).json(servicios); // Enviar un código de estado 200 (OK) al cliente
    } catch (error) {
      res.sendStatus(500); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
    }
})

//Desarrollo de Metodo GET - Buscar Servicios
router.get('/:id', async function(req, res){
  try {
      const respuesta = await servicioController.buscarController(req, res);
      res.status(200).json(respuesta); // Enviar un código de estado 200 (OK) al cliente
    } catch (error) {
      res.status(500).send("Servicio Inexistente"); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
    }
})

// Desarrollo de Método POST - Crear Servicio
router.post('/', async (req, res, next) => {
  try {
    await servicioController.crearController(req, res);
    res.status(200).send("Servicio Creado Exitosamente" ); // Enviar un código de estado 200 (OK) al cliente
  } catch (error) {
    res.status(500).json({ error: error.message }); // Enviar un código de estado 500 (Internal Server Error) al cliente en caso de error
  }
});

// Desarrollo de Método DELETE - Eliminar Servicio
router.delete('/:id', async function(req,res,next){
  try{
    await servicioController.eliminarController(req,res)
    res.status(200).send("Servicio eliminado correctamente")
  }catch(e){
    res.status(500).send("Error: no se pudo eliminar el servicio");
  }
})

//Desarrollo de Metodo PATCH - Modificar Descripcion de Servicio
router.patch('/:id', async function (req,res,next){
  try{
    await servicioController.modificarController(req,res)
    res.status(200).send("Descripción modificada correctamente")
  }catch(e){
    res.status(500).send("Error: no se pudo modificar la Descripción del servicio indicado");
  }


})

export default router
