import { UsuarioFactory } from "../factories/usuario_factory.js";
import { UsuarioRepository } from "../repository/usuario_repository.js";
import {Contratar} from '../command/contratar.js';
import {ServiciosContratados} from '../command/serviciosContratados.js';
import { CancelarServicio } from '../command/cancelarServicio.js';

export class UsuarioUseCase {

  async crear(nombre, apellido, mail, direccion, telefono, password) {
    try {
      //CREAMOS EL USUARIO CORRESPONDIENTE VERIFICADO POR EXCEPCION
      const usuario = new UsuarioFactory().crear(nombre,apellido,mail,direccion,telefono,password);
      //CREAMOS CONST REPOSITORIO Y GUARDAMOS AL USUARIO CREADO
      await new UsuarioRepository().guardar(usuario);
    } catch (e) {
      next(e);
    }
  }

  //LISTAR LOS USUARIOS
  async listar() {
    const respuesta = await new UsuarioRepository().listarUsuarios();
    return respuesta;
  }

  //BUSCAR USUARIO POR MAIL
  async buscar(id) {
    const usuarioBuscado = await new UsuarioRepository().buscarUsuario(id);
    if (usuarioBuscado.length === 0) {
      throw new Error("Usuario no encontrado");
    }
    return usuarioBuscado;
  }

  //ELIMINAR  USUARIO
  async eliminar(id) {
    // Realiza llamada al método eliminarUsuario en la instancia de UsuarioRepository
    const eliminado = await new UsuarioRepository().eliminarUsuario(id);
      // Verificar si el usuario fue eliminado correctamente
    if (eliminado.deletedCount === 0) {
      // Si el número de elementos eliminados es 0, lanzar un error.
      throw new Error("El usuario no pudo ser eliminado.");
    }
  }

  
  //MODIFICAR USUARIO
  async modificar(mail, telfNuevo) {
    // Realiza llamada al método modificarTelefono en la instancia de UsuarioRepository
    const modificado = await new UsuarioRepository().modificarTelefono(mail,telfNuevo);
    // Verificar si el teléfono fue modificado correctamente
    if (modificado.modifiedCount === 0) {
      // Si el número de documentos modificados es 0, lanzar un error
      throw new Error("No se pudo modificar el telelfono");
    }
  }

  //CAMBIO
  async contratarServicio(mail,id){
    const servicio = await new Contratar().contratarServicio(mail,id);
    return servicio;
  }

  async serviciosContratados(id){

    const servicio = await new ServiciosContratados().serviciosContratados(id);
    return servicio;
  }
  
  async cancelarServicio(mail, id){
    const servicio = await new CancelarServicio().cancelarServicio(mail, id);
    return servicio;
  }
}
