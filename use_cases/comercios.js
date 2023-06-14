import { ComercioFactory } from "../factories/comercio_factory.js";
import { ComercioRepository } from "../repository/comercio_repository.js";

class ComercioUseCase {
  async crear(nombre, descripcion, telefono, direccion, email) {
    try {
      //CREAMOS EL COMERCIO CORRESPONDIENTE VERIFICADO POR EXCEPCION
      const comercio = new ComercioFactory().crear(nombre, descripcion, telefono, direccion, email);

      //CREAMOS CONST REPOSITORIO Y GUARDAMOS AL COMERCIO CREADO
      const resRespositorio = new ComercioRepository();
      await resRespositorio.guardar(comercio);

    } catch (e) {
      console.error("Comercio Invalido");
    }
  }

  //LISTAR LOS COMERCIOS 
  async listar(){
    await (new ComercioRepository().listarComercios())
  }

  //BUSCAR COMERCIO POR MAIL 
  async buscar(mail){
    const comercioBuscado = await (new ComercioRepository().buscarComercio(mail));
    if(!comercioBuscado){
        throw new Error ("Comercio no encontrado")
    }
    return comercioBuscado
  }

  //ELIMINAR  COMERCIO
  async eliminar(mail){
    const eliminado = await new ComercioRepository().eliminarComercio(mail)

    if (eliminado.deleteCount == 0) {
        throw new Error ("El comercio se eliminó correctamente.");
      } 
  }

  //MODIFICAR COMERCIO
  async modificar(mail, telfNuevo){
    const modificado = await new ComercioRepository().modificarTelefono(mail,telfNuevo)
     if(modificado.modifiedCount == 0){
        throw new  Error ("No se pudo modificar el comercio")
     }
  }

}