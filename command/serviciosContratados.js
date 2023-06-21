// Importación de los módulos necesarios
import { UsuarioRepository } from '../repository/usuario_repository.js';

export class ServiciosContratados {
  async serviciosContratados(id) {
    // Crear una instancia del repositorio de usuarios
    const usuarioRepo = new UsuarioRepository();
     // Buscar el usuario en el repositorio
    const usuario = await usuarioRepo.buscarUsuario(id);

    // Verifica si el usuario existe
    if (usuario.length !== 0) {
      // Obtiene los servicios contratados por el usuario
      const serviciosContratados = usuario[0].servicios;
      // Verificar si el usuario tiene servicios contratados
      if(serviciosContratados.length !== 0){
        // Devuelve los servicios contratados
        return serviciosContratados;
      } else {
        throw new Error('No tiene servicios contratados.');
      }
    } else {
      throw new Error('Usuario Inexistente');
    }
  }
}