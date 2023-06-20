import { UsuarioRepository } from '../repository/usuario_repository.js';

export class ServiciosContratados {
  async serviciosContratados(id) {
    const usuarioRepo = new UsuarioRepository();
    const usuario = await usuarioRepo.buscarUsuario(id);

    if (usuario.length !== 0) {
      const serviciosContratados = usuario[0].servicios;
      if(serviciosContratados.length !== 0){
        return serviciosContratados;
      } else {
        throw new Error('No tiene servicios contratados.');
      }
    } else {
      throw new Error('Usuario Inexistente');
    }
  }
}