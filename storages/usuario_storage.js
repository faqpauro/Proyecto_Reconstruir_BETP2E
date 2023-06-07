export class UsuarioStorage{ //CORRESPONDE AL ARRAY
    constructor(){
        //EL ALMACENAMIENTO SE REALIZA INICIALMENTE EN UN ARRAY INTERNO
        this.usuarios=[]
    }
    
//GUARDAMOS AL USUARIO EN NUESTRA COLECCION
guardar(usuario){
    this.usuarios.push(usuario)
}

//TRAEMOS A LOS USUARIOS DEL ARRAY
listarUsuarios(){
    return this.usuarios
}

//BUSCAMOS USUARIO ESPECIFICA POR MAIL
buscarUsuario(mailNuevo){
    return this.usuarios.find(per => (per.mail == mailNuevo))
}

//ELIMINAR USUARIO POR MAIL
eliminarUsuario(mailNuevo){
    //GENERAMOS UN ARRAY CON TODOS LOS ELEMENTOS QUE CUMPLAN LA CONDICION
    //CASO: ELIMINARA DEL ARRAY AQUEL O AQUELLOS VALORES QUE SEAN IGUAL A LOS PASADOS POR PARAMETRO
    return this.usuarios.filter(per => (per.mail !== mailNuevo))
}

//MODIFICAMOS DATO DEL USUARIO 
actualizarTelefono(mail,telefono){
    const usuario1 = this.buscarUsuario(mail)
    if(usuario1 != null){
        usuario1.setTelefono(telefono)
    }
}
}