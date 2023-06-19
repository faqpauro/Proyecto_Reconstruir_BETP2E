/* DOMINIO: VENTA - COMPRA Y SUMINISTRO DE SERVICIOS DE CONSTRUCCION
PENDIENTE:

    1.- DESARROLLAR REGLAS DE NEGOCIOS DE ACUERDO A PROCESOS INTERNOS DEL SISTEMA
    COMPRA - VENTA - PRESTACION DE SERVICIO - REGISTRACION - ETC.
    2.- DESARROLLAR RESPECTIVOS ACCIONARES EN COMMANDS
    3.- POLITICAS - LIMITACIONES - [DIAGRAMA DE FLUJO POR FUNCIONALIDADES]
*/

// USUARIO: CONTRATAR SERVICIO
// const usurioRepo = new UsuarioRepository();
// const servicioRepo = new ComercioRepository();

/*METODO = COMMAND

contratarServicio(mail,id){
const servicio = this.servicioRepo().buscarServicio(id)
const usuario = this.usuarioRepo().buscarUsuario(mail)

if(usuario.length !== 0){
    if(servicio.length !== 0){
        if(existeServicio.lenght === 0){
            usuario.contratarServicio(servicio)
    }else{
        console.log("Servicio Inexistente")
    }
}else{
    console.log("Usuario Inexistente")
}
}

*** METODO = REPOSITORIO DE SERVICIO ***
// DESARROLLADO BUSCAR SERVICIO POR ID

*** METODO = REPOSITORIO DE USUARIO ***
// DESARROLLADO BUSCAR USUARIO POR MAIL

*** METODO = REPOSITORIO DE USUARIO ***
async contratarServicio(servicio){
    this.storage.contratarServicio(servicio)
    }  
}

*** METODO = DB STORAGE DE USUARIO ***
asyn contratarServicio(servicio){
    await this.servicios.insertOne({
        _id: id
        nombre: servicio.getNombre(),
        descripcion: servicio.getDescripcion(),
        telefono: servicio.getTelefono(),
        direccion: servicio.getDireccion(),
        disponibilidad: servicio.getDisponibilidad(),
      });
}

*** METODO = CASOS DE USOS ***
async contratarServicio(mail,id){
    const servicio = await new UsuarioRepository().contratarServicio(mail,id);
    //SI EL SERVICIO no FUE INSERTADO
     if (!servicio.acknowledged) {
      throw new Error("No se pudo insertar el servicio");
    }
}

*/

