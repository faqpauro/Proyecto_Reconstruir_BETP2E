import { UsuarioUseCase } from "../use_cases/usuarios.js";

export default class UsuarioController {
  constructor() {
    console.log("constructor controller")
    this.usuarioUseCase = new UsuarioUseCase();
  }
  //CONTROLLER CREAR USUARIO 
  async crearController(req, res, next) {
    console.log(req.body)
    //req.body = { nombre, apellido, mail, direccion, telefono, password };
    //const usuario = JSON.stringify(req.body);
    try{
      const { nombre, apellido, mail, direccion, telefono, password } = req.body;
      await this.usuarioUseCase.crear(nombre, apellido, mail, direccion, telefono, password);
    } catch(error){
      next(error);
    }
    //res.status(200).json({ mensaje: "Usuario Creado Exitosamente" });
    //res.status(500);
  }

  //CONTROLLER LISTAR USUARIOS
  async listarController(req, res) {
      console.log("arranca controller")
      const respuesta = await this.usuarioUseCase.listar();
      console.log("termina controller")
      return respuesta;
  }

  //CONTROLLER BUSCAR USUARIO POR MAIL
  async buscarController(req,res){
    const {id} = req.params;
    const respuesta = await this.usuarioUseCase.buscar(id);
    return respuesta;
  }

  //CONTROLLER PARA ELIMINAR USUARIO
  async eliminarUsuario(req, res, next) {
    const { id } = req.params;

    try {
      await this.usuarioUseCase.eliminar(id);
    } catch (error) {
        next(error);
    }
  }
 
  //CONTROLLER PARA MODIFICAR
  async modificarController(req, res) {
    const { id, telefono} = req.params;

    try {
      await this.usuarioUseCase.modificar(id, telefono);
      res.status(200).json({ mensaje: "Usuario modificado exitosamente" });
    } catch (error) {
      res.status(500);
    }
  }
}





