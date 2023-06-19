import { ServicioFactory } from "../factories/servicio_factory.js";
import { ServicioRepository } from "../repository/servicio_repository.js";

export class ServicioUseCase {

  async crear(id, nombre, descripcion, telefono, direccion) {
      // Creamos el servicio correspondiente verificado por excepción
      const servicio = new ServicioFactory().crear(id, nombre, descripcion, telefono, direccion);

      // Creamos el repositorio y guardamos el servicio creado
      await new ServicioRepository().guardar(servicio);
  }

  //LISTAR LOS SERVICIOS
  async listar() {
    const respuesta = await new ServicioRepository().listarServicios();
    return respuesta;
  }

  //BUSCAR SERVICIO POR NOMBRE
  async buscar(id) {
    const servicioBuscado = await new ServicioRepository().buscarServicio(id);
    if (servicioBuscado.length === 0) {
      throw new Error("Servicio no encontrado");
    }
    return servicioBuscado;
  }

  //ELIMINAR SERVICIO
  async eliminar(id) {
    const eliminado = await new ServicioRepository().eliminarServicio(id);

    if (eliminado.deletedCount === 0) {
      throw new Error("El servicio no se pudo eliminar correctamente.");
    }
  }

  //MODIFICAR SERVICIO
  async modificar(id, descripcionNueva) {
    const modificado = await new ServicioRepository().modificarDescripcion(id, descripcionNueva);
    if (modificado.modifiedCount === 0) {
      throw new Error("No se pudo modificar el servicio.");
    }
  }
}
