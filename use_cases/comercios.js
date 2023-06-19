import { ComercioFactory } from "../factories/comercio_factory.js";
import { ComercioRepository } from "../repository/comercio_repository.js";

export class ComercioUseCase {
  async crear(nombre, descripcion, telefono, direccion, mail) {
    //CREAMOS EL COMERCIO CORRESPONDIENTE VERIFICADO POR EXCEPCION
    const comercio = new ComercioFactory().crear(nombre, descripcion, telefono, direccion, mail);

    //CREAMOS CONST REPOSITORIO Y GUARDAMOS AL COMERCIO CREADO
    await new ComercioRepository().guardar(comercio);
  }

  //LISTAR LOS COMERCIOS 
  async listar(){
    const respuesta = await new ComercioRepository().listarComercios();
    return respuesta;
  }

  //BUSCAR COMERCIO POR MAIL 
  async buscar(mail){
    const comercioBuscado = await new ComercioRepository().buscarComercio(mail);
    if(comercioBuscado.length === 0){
        throw new Error ("Comercio no encontrado")
    }
    return comercioBuscado;
  }

  //ELIMINAR  COMERCIO
  async eliminar(mail){
    const eliminado = await new ComercioRepository().eliminarComercio(mail)

    if (eliminado.deletedCount === 0) {
        throw new Error ("El comercio no se pudo eliminar correctamente.");
      } 
  }

  //MODIFICAR COMERCIO
  async modificar(mail, telfNuevo){
    const modificado = await new ComercioRepository().modificarTelefono(mail,telfNuevo);
     if(modificado.modifiedCount === 0){
        throw new  Error ("No se pudo modificar el comercio")
     }
  }

}