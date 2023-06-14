import { ServicioFactory } from "../factories/servicio_factory";
import { ServicioRepository } from "../repository/servicio_repository";

class ServicioUseCase {
  async crear(nombre, descripcion, telefono, direccion, disponibilidad) {
    try {
      // Creamos el servicio correspondiente verificado por excepción
      const servicio = ServicioFactory.crear(nombre, descripcion, telefono, direccion, disponibilidad);

      // Creamos el repositorio y guardamos el servicio creado
      const servicioRepository = new ServicioRepository();
      await servicioRepository.guardar(servicio);

    } catch (e) {
      console.error("Servicio inválido");
    }
  }

  async listar() {
    await new ServicioRepository().listarServicios();
  }

  async buscar(nombre) {
    const servicioBuscado = await new ServicioRepository().buscarServicio(nombre);
    if (!servicioBuscado) {
      throw new Error("Servicio no encontrado");
    }
    return servicioBuscado;
  }

  async eliminar(nombre) {
    const eliminado = await new ServicioRepository().eliminarServicio(nombre);

    if (eliminado.deleteCount == 0) {
      throw new Error("El servicio no se pudo eliminar correctamente.");
    }
  }

  async modificar(nombre, descripcionNueva) {
    const modificado = await new ServicioRepository().modificarDescripcion(nombre, descripcionNueva);
    if (modificado.modifiedCount == 0) {
      throw new Error("No se pudo modificar el servicio.");
    }
  }
}
