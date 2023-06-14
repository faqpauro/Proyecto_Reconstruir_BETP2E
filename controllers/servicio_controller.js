import { ServicioUseCase } from "../use_cases/servicios";

class ServicioController {
  constructor() {
    this.servicioUseCase = new ServicioUseCase();
  }

  async crearController(req, res, next) {
    const { nombre, descripcion, telefono, direccion, disponibilidad } = req.body;

    try {
      await this.servicioUseCase.crear(nombre, descripcion, telefono, direccion, disponibilidad);
      res.status(200).json({ mensaje: "Servicio creado exitosamente" });
    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async listarController(req, res) {
    try {
      const respuesta = await this.servicioUseCase.listar();
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(500);
    }
  }

  async buscarController(req, res) {
    const { nombre } = req.params;

    try {
      const respuesta = await this.servicioUseCase.buscar(nombre);
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(500).send("Servicio inexistente");
    }
  }

  async eliminarController(req, res, next) {
    const { nombre } = req.params;

    try {
      await this.servicioUseCase.eliminar(nombre);
      res.status(200).json({ mensaje: "Servicio eliminado correctamente" });
    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  async modificarController(req, res) {
    const { nombre, descripcionNueva } = req.params;

    try {
      await this.servicioUseCase.modificar(nombre, descripcionNueva);
      res.status(200).json({ mensaje: "Servicio modificado exitosamente" });
    } catch (error) {
      res.status(500);
    }
  }
}
