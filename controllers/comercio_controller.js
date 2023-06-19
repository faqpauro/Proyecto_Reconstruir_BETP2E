import { ComercioUseCase } from "../use_cases/comercios.js";

export default class ComercioController {
  constructor() {
    this.comercioUseCase = new ComercioUseCase();
  }

  //CONTROLLER CREAR COMERCIO 
  async crearController(req, res, next) {
    const { nombre, descripcion, telefono, direccion, mail } = req.body;
    
    await this.comercioUseCase.crear(nombre, descripcion, telefono, direccion, mail);
  }

  //CONTROLLER LISTAR COMERCIOS
  async listarController(req, res) {
    const respuesta = await this.comercioUseCase.listar();
    return respuesta;
  }

  //CONTROLLER BUSCAR COMERCIO POR MAIL
  async buscarController(req,res){
    const {id} = req.params;
    
    try{
        const respuesta = await this.comercioUseCase.buscar(id);
        return respuesta
    }catch(error){
        next(error);
    }
  }

  //CONTROLLER PARA ELIMINAR COMERCIO
  async eliminarController(req, res, next) {
    const { id } = req.params;

    try {
      await this.comercioUseCase.eliminar(id);
    } catch (error) {
      next(error);
    }
  }
 
  //CONTROLLER PARA MODIFICAR COMERCIO
  async modificarController(req, res) {
    const { id } = req.params;
    const { telefono } = req.body;

    try {
      await this.comercioUseCase.modificar(id, telefono);
    } catch (error) {
      next(error);
    }
  }


}


