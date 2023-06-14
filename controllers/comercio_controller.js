import { ComercioUseCase } from "../use_cases/comercios.js";

class ComercioController {
  constructor() {
    this.comercioUseCase = new ComercioUseCase();
  }
  //CONTROLLER CREAR COMERCIO 
  async crearController(req, res, next) {
    req.body = { nombre, descripcion, telefono, direccion, email };
    const comercio = req.body;

    try {
      await comercioUseCase.crear(comercio);
      res.status(200).json({ mensaje: "Comercio Creado Exitosamente" });
    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  //CONTROLLER LISTAR COMERCIOS
  async listarController(req, res) {
    try {
      const respuesta = await this.comercioUseCase.listar();
      res.status(200);
      res.send("Comercios Registrados" + respuesta);
    } catch (error) {
      res.status(500);
    }
  }

  //CONTROLLER BUSCAR COMERCIO POR MAIL
  async buscarController(req,res){
    const {mail} = req.params;
    
    try{
        const respuesta = await this.comercioUseCase.buscar(mail);
        res.status(200).json(respuesta)
    }catch(error){
        res.status(500)
        res.send("Comercio Inexistente")
    }
  }

  //CONTROLLER PARA ELIMINAR COMERCIO
  async eliminarUsuario(req, res, next) {
    const { mail } = req.params;

    try {
      await this.comercioUseCase.eliminar(mail);
      res.status(200).json({ mensaje: "Comercio eliminado correctamente" });
    } catch (error) {
        res.status(500);
      next(error);
    }
  }
 
  //CONTROLLER PARA MODIFICAR COMERCIO
  async modificarController(req, res) {
    const { mail, telefono} = req.params;

    try {
      await this.comercioUseCase.modificar(mail, telefono);
      res.status(200).json({ mensaje: "Comercio modificado exitosamente" });
    } catch (error) {
      res.status(500);
    }
  }


}


