export class CancelarServicio {
    constructor() {
      this.servicioRepo = new ServicioRepository();
      this.usuarioRepo = new UsuarioRepository();
    }
  
    async cancelarServicio(mail, id) {
      const servicioArray = await this.servicioRepo.buscarServicio(id);
      const servicio = servicioArray[0];
      const usuario = await this.usuarioRepo.buscarUsuario(mail);

      if (usuario.length !== 0) {
        if (servicioArray.length !== 0) {
          return await this.usuarioRepo.contratarServicio(usuario, servicio);
        } else {
          console.log("Servicio Inexistente");
        }
      } else {
        console.log("Usuario Inexistente");
      }
    }
    
  }