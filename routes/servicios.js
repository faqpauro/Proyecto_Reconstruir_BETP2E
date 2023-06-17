import express from 'express';
import { ServicioController } from '../controllers/servicio_controller.js';

class ServicioRouter {
  constructor() {
    this.router = express.Router();
    this.servicioController = new ServicioController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', async (req, res) => {
      try {
        await this.servicioController.listarController(req, res);
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(500);
      }
    });

    this.router.get('/:nombre', async (req, res) => {
      try {
        await this.servicioController.buscarController(req, res);
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(500);
      }
    });

    this.router.post('/', async (req, res, next) => {
      try {
        await this.servicioController.crearController(req, res, next);
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(500);
      }
    });

    this.router.delete('/:nombre', async (req, res, next) => {
      try {
        await this.servicioController.eliminarController(req, res, next);
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(500);
      }
    });

    this.router.put('/:nombre/:descripcionNueva', async (req, res) => {
      try {
        await this.servicioController.modificarController(req, res);
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(500);
      }
    });
  }
}

export default this.router;