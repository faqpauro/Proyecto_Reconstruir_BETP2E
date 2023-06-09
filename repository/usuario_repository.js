import {UsuarioDBStorage} from "../storages/usuario_db_storage.js"

export class UsuarioRepository{
    //ALMACENAMIENTO DE DATOS POR DEFECTO SE HACE USO DE CONEXION CON DBMONGO
    constructor(){ 
        this.storage= new UsuarioDBStorage()
    }
//DESARROLLO DE CRUD

//GUARDAMOS A LA  PERSONA EN NUESTRO REPOSITORIO DE ACUERDO AL TIPO RECIBIDO
 async guardar(usuario){
    //Busca a la persona en la colleccion de BD
    const usuarioBuscado =  await this.buscarUsuario(usuario.getMail())
    //Si no existe la persona es guardada en la coleccion. 
    //(length === 0 ) VERIFICA QUE LA DEVOLUCION CORRESPONDE A UN ARRAY VACIO
    if (usuarioBuscado.length === 0) {
        this.storage.guardar(usuario)
    } else {
        throw new Error("Persona Registrada.")
    }  
}

//LISTAR USUARIOS DEL REPOSITORIO 
listarUsuarios(){
    return this.storage.listarUsuarios()
}

//BUSCAR USUARIO POR MAIL - RETORNA USUARIO O NULL
async buscarUsuario(mailNuevo){
    return await this.storage.buscarUsuario(mailNuevo)
 }

//ELIMINAR USUARIO ESPECIFICO IDENTIFICADO POR MAIL
eliminarUsuario(mailNuevo){
    return this.storage.eliminarUsuario(mailNuevo)
}

//MODIFICAMOS DATO DEL USUARIO 
modificarTelefono(mail,telfNuevo){
    return this.storage.actualizarTelefono(mail,telfNuevo)
}
/*
agregarServicio(mail,servicio){
    return this.storage.actualizarTelefono(mail,telfNuevo)
}*/


async guardarServicio(usuario, servicio){
    return await this.storage.guardarServicio(usuario, servicio)
}

async removerServicio(mail, id){
    return await this.storage.removerServicio(mail, id)
}

}