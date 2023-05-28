import {UsuarioStorageFactory} from "../storages/usuario_storage_factory.js"

export class UsuarioRepository{
    //ALMACENAMIENTO DE DATOS
    //PARAMETRO POR DEFAULT, SI EL MISMO NO ESPECIFICADO TOMARA POR DEFAULT BD
    constructor(tipo='array'){ 
        this.storage= new UsuarioStorageFactory(tipo).storage()
    }
//DESARROLLO DE CRUD

//GUARDAMOS A LA  PERSONA EN NUESTRO REPOSITORIO DE ACUERDO AL TIPO RECIBIDO
 guardar(usuario){
    //Trae a la persona si existe en bd
    const usuarioBuscado =  this.buscarUsuario(usuario.getMail())
    //Si la persona no existe se guarda.
    if( usuarioBuscado == ""){
        this.storage.guardar(usuario)
    }else{
        throw new Error("Persona Registrada.")
    }  
}

//LISTAR USUARIOS DEL REPOSITORIO INDICADO
listarUsuarios(){
    return this.storage.listarUsuarios()
}

 //BUSCAR USUARIO POR MAIL - RETORNA USUARIO O NULL
buscarUsuario(mailNuevo){
    return  this.storage.buscarUsuario(mailNuevo)
 }

 //ELIMINAR USUARIO ESPECIFICO IDENTIFICADO POR MAIL
eliminarUsuario(mailNuevo){
    this.storage.eliminarUsuario(mailNuevo)
}

//MODIFICAMOS DATO DEL USUARIO 
modificarTelefono(mail,telfNuevo){
    this.storage.actualizarTelefono(mail,telfNuevo)
}

}