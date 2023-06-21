// Importación de los módulos necesarios
import { ServicioRepository } from '../repository/servicio_repository.js';
import { UsuarioRepository } from '../repository/usuario_repository.js';

// Definición de la clase Contratar
export class Contratar {
  constructor() {
    this.servicioRepo = new ServicioRepository();
    this.usuarioRepo = new UsuarioRepository();
  }

  async contratarServicio(mail, id) {
    const servicioArray = await this.servicioRepo.buscarServicio(id);
    const servicio = servicioArray[0];
    const usuario = await this.usuarioRepo.buscarUsuario(mail);
    
    // Verifica si el usuario existe
    if (usuario.length !== 0) {
      // Obtiene los servicios contratados por el usuario
      const serviciosUsuario = usuario[0].servicios;
       // Verificar si el servicio ya está contratado por el usuario
      const servicioEncontrado = serviciosUsuario.find((e) => e._id === id);
      if (servicioArray.length !== 0) {
        if (!servicioEncontrado) {
          // Contratar el servicio y guardar en el repositorio
          return await this.usuarioRepo.guardarServicio(usuario, servicio);
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