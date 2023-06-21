// Importación de los módulos necesarios
import { UsuarioRepository } from '../repository/usuario_repository.js';
import { ServicioRepository } from '../repository/servicio_repository.js';

export class CancelarServicio {
  constructor() {
    this.usuarioRepo = new UsuarioRepository();
    this.servicioRepo = new ServicioRepository();
  }

  async cancelarServicio(mail, id) {
    const usuario = await this.usuarioRepo.buscarUsuario(mail);

    if (usuario.length !== 0) {
      // Obtener los servicios contratados por el usuario
      const serviciosUsuario = usuario[0].servicios;
      // Verificar si el usuario tiene servicios contratados
      if (serviciosUsuario.length !== 0) {
      // Buscar el servicio específico dentro de los servicios contratados por el usuario
        const servicioEncontrado = serviciosUsuario.find((e) => e._id === id);
        // Verifica si se encontró el servicio
        if (servicioEncontrado) {
          // Cancelar el servicio y guardar los cambios en el repositorio de usuario
          return await this.usuarioRepo.removerServicio(mail, id)
        } else {
          throw new Error("Servicio no encontrado")
        }
      } else {
        throw new Error("El usuario no posee servicios actualmente")
      }
    } else {
      throw new Error("El usuario no existe")
    }
  }
}
