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
      const serviciosUsuario = usuario[0].servicios;
      if (serviciosUsuario.length !== 0) {
        const servicioEncontrado = serviciosUsuario.find((e) => e._id === id);
        if (servicioEncontrado) {
          return await this.usuarioRepo.cancelarServicio(mail, id)
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
