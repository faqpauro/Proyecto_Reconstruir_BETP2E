import { UsuarioUseCase } from "../use_cases/usuarios.js";

export  class UsuarioController {
  constructor() {
    this.usuarioUseCase = new UsuarioUseCase();
  }
  //CONTROLLER CREAR USUARIO 
  async crearController(req, res, next) {
    req.body = { nombre, apellido, mail, direccion, telefono, password };
    const usuario = req.body;

    try {
      await usuarioUseCase.crear(usuario);
      res.status(200).json({ mensaje: "Usuario Creado Exitosamente" });
    } catch (error) {
      res.status(500);
      next(error);
    }
  }

  //CONTROLLER LISTAR USUARIOS
  async listarController(req, res) {
    try {
      const respuesta = await this.usuarioUseCase.listar();
      res.status(200).send("Usuarios Registrados" + respuesta);
    } catch (error) {
      res.status(500).send("Error al obtener la lista de usuarios.");
    }
  }

  //CONTROLLER BUSCAR USUARIO POR MAIL
  async buscarController(req,res){
    const {id} = req.params;
    
    try{
        const respuesta = await this.usuarioUseCase.buscar(id);
        res.status(200).json(respuesta)
    }catch(error){
        res.status(500).send("Usuario Inexistente")
    }
  }

  //CONTROLLER PARA ELIMINAR USUARIO
  async eliminarUsuario(req, res, next) {
    const { id } = req.params;

    try {
      await this.usuarioUseCase.eliminar(id);
      res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500);
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





