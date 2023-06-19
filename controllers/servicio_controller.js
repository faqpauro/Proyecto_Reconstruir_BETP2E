import { ServicioUseCase } from "../use_cases/servicios.js";

export default class ServicioController {
  constructor() {
    this.servicioUseCase = new ServicioUseCase();
  }

  //CONTROLLER CREAR SERVICIO
  async crearController(req, res, next) {
    const { id, nombre, descripcion, telefono, direccion } = req.body;

    await this.servicioUseCase.crear(id, nombre, descripcion, telefono, direccion);
  }

  //CONTROLLER LISTAR SERVICIOS
  async listarController(req, res) {
      const respuesta = await this.servicioUseCase.listar();
      return respuesta;
  }

  //CONTROLLER BUSCAR SERVICIO POR ID
  async buscarController(req, res) {
    const { id } = req.params;

    try {
      const respuesta = await this.servicioUseCase.buscar(id);
      return respuesta;
    } catch (error) {
      next(error);
    }
  }

  //CONTROLLER PARA ELIMINAR SERVICIO
  async eliminarController(req, res, next) {
    const { id } = req.params;

    try {
      await this.servicioUseCase.eliminar(id);
    } catch (error) {
      next(error);
    }
  }

  //CONTROLLER PARA MODIFICAR
  async modificarController(req, res) {
    const { id } = req.params;
    const { descripcion } = req.body;

    try {
      await this.servicioUseCase.modificar(id, descripcion);
    } catch (error) {
      next(error);
    }
  }
}
