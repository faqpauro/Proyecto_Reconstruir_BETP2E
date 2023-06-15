import { UsuarioFactory } from "../factories/usuario_factory.js";
import { UsuarioRepository } from "../repository/usuario_repository.js";

export class UsuarioUseCase {
  async crear(nombre, apellido, mail, direccion, telefono, password) {
    try {
      //CREAMOS EL USUARIO CORRESPONDIENTE VERIFICADO POR EXCEPCION
      const usuario = new UsuarioFactory().crear(nombre,apellido,mail,direccion,telefono,password);

      //CREAMOS CONST REPOSITORIO Y GUARDAMOS AL USUARIO CREADO
      const resRespositorio = new UsuarioRepository();
      await resRespositorio.guardar(usuario);

    } catch (e) {
      console.error("Usuario Invalido");
    }
  }

  //LISTAR LOS USUARIOS 
  async listar(){
    await (new UsuarioRepository().listarUsuarios())
  }

  //BUSCAR USUARIO POR MAIL 
  async buscar(id){
    const usuarioBuscado = await (new UsuarioRepository().buscarUsuario(id))
    if(!usuarioBuscado){
        throw new Error ("Usuario no encontrado")
    }
    return usuarioBuscado
  }

  //ELIMINAR  USUARIO
  async eliminar(id){
    const eliminado = await new UsuarioRepository().eliminarUsuario(id)

    if (eliminado.deleteCount == 0) {
        throw new Error ("El usuario se eliminó correctamente.");
        //resultado.result.deletedCount
      } 
  }

  //MODIFICAR USUARIO
  async modificar(mail, telfNuevo){
    const modificado = await new UsuarioRepository().modificarTelefono(mail,telfNuevo)
     if(modificado.modifiedCount == 0){
        throw new  Error ("No se pudo modificar el telelfono")
     }
  }

}



