// Importación de los módulos necesarios
import { ServicioRepository } from '../repository/servicio_repository.js';
import { UsuarioRepository } from '../repository/usuario_repository.js';

// Definición de la clase Contratar
export class Contratar {
  constructor() {
    // Creación de instancias de los repositorios
    this.servicioRepo = new ServicioRepository();
    this.usuarioRepo = new UsuarioRepository();
  }

    // Método para contratar un servicio
  async contratarServicio(mail, id) {
    // Buscar el servicio en el repositorio
    const servicioArray = await this.servicioRepo.buscarServicio(id);
    const servicio = servicioArray[0];
    // Buscar el usuario en el repositorio
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