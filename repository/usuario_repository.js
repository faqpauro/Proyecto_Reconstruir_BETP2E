import {UsuarioDBStorage} from "../storages/usuario_db_storage.js"

export class UsuarioRepository{
    //ALMACENAMIENTO DE DATOS
    //PARAMETRO POR DEFAULT, SI EL MISMO NO ESPECIFICADO TOMARA POR DEFAULT BD
    constructor(){ 
        this.storage= new UsuarioDBStorage()
    }
//DESARROLLO DE CRUD

//GUARDAMOS A LA  PERSONA EN NUESTRO REPOSITORIO DE ACUERDO AL TIPO RECIBIDO
 async guardar(usuario){
    //Trae a la persona si existe en bd
    const usuarioBuscado =  await this.buscarUsuario(usuario.getMail())
    //Si la persona no existe se guarda. 
    //(!) VERIFICAR QUE LA DEVOLUCION CORRESPONDA A UNDEFINED O NULL
    if (usuarioBuscado.length === 0) {
        this.storage.guardar(usuario)
    } else {
        // Procesar los documentos encontrados
        throw new Error("Persona Registrada.")
    }
    //if( !usuarioBuscado){
     //   this.storage.guardar(usuario)
    //}else{
     //   throw new Error("Persona Registrada.")
    //}  
}

//LISTAR USUARIOS DEL REPOSITORIO INDICADO
listarUsuarios(){
    console.log("arranca repository")
    return this.storage.listarUsuarios()
}

 //BUSCAR USUARIO POR MAIL - RETORNA USUARIO O NULL
buscarUsuario(mailNuevo){
    return  this.storage.buscarUsuario(mailNuevo)
 }

 //ELIMINAR USUARIO ESPECIFICO IDENTIFICADO POR MAIL
eliminarUsuario(mailNuevo){
    return this.storage.eliminarUsuario(mailNuevo)
}

//MODIFICAMOS DATO DEL USUARIO 
modificarTelefono(mail,telfNuevo){
    this.storage.actualizarTelefono(mail,telfNuevo)
}

}