//CAMBIOS
import { ServicioRepository } from '../repository/servicio_repository.js';
import { UsuarioRepository } from '../repository/usuario_repository.js';

export class Contratar {
  constructor() {
    this.servicioRepo = new ServicioRepository();
    this.usuarioRepo = new UsuarioRepository();
  }

  async contratarServicio(mail, id) {
    const servicioArray = await this.servicioRepo.buscarServicio(id);
    const servicio = servicioArray[0];
    const usuario = await this.usuarioRepo.buscarUsuario(mail);
    

    if (usuario.length !== 0) {
      const serviciosUsuario = usuario[0].servicios;
      const servicioEncontrado = serviciosUsuario.find((e) => e._id === id);
      if (servicioArray.length !== 0) {
        if (!servicioEncontrado) {
          return await this.usuarioRepo.contratarServicio(usuario, servicio);
        } else {
          throw Error("El servicio ya está contratado.")
        }
      } else {
        throw Error("Servicio Inexistente")
      }
    } else {
      throw Error("Usuario Inexistente")
    }
  }
  
}