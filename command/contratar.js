//CAMBIOS
import { ServicioRepository } from '../repository/servicio_repository.js';
import { UsuarioRepository } from '../repository/usuario_repository.js';

export class Contratar {
  constructor() {
    this.servicioRepo = new ServicioRepository();
    this.usuarioRepo = new UsuarioRepository();
  }

  async contratarServicio(mail, id) {
    const servicio = this.servicioRepo.buscarServicio(id);
    const usuario = this.usuarioRepo.buscarUsuario(mail);
    const result = false 


    if (usuario.length !== 0) {
      if (servicio.length !== 0) {
        result = await this.usuarioRepo.contratarServicio(usuario, servicio);
      } else {
        console.log("Servicio Inexistente");
      }
    } else {
      console.log("Usuario Inexistente");
    }
    return result
  }
  
}

