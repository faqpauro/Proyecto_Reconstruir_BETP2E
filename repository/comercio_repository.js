import {StorageFactory} from "../storages/storage_factory.js"

export class ComercioRepository{
    //ALMACENAMIENTO DE DATOS
    //PARAMETRO POR DEFAULT, SI EL MISMO NO ESPECIFICADO TOMARA POR DEFAULT BD
    constructor(tipo='array',modelo='comercio'){ 
        this.storage= new StorageFactory(tipo,modelo).storage()
    }
//DESARROLLO DE CRUD

//GUARDAMOS Al COMERCIO EN NUESTRO REPOSITORIO DE ACUERDO AL TIPO RECIBIDO
 guardar(comercio){
    //Trae al si existe en bd
    const comercioBuscado =  this.buscarComercio(comercio.getMail())
    //(!) VERIFICAR QUE LA DEVOLUCION CORRESPONDA A UNDEFINED O NULL
    if( !comercioBuscado){
        this.storage.guardar(comercio)
    }else{
        throw new Error("Comercio Registrado.")
    }  
}

//LISTAR COMERCIOS DEL REPOSITORIO INDICADO
listarComercios(){
    return this.storage.listarComercios()
}

 //BUSCAR COMERCIO POR MAIL - RETORNA COMERCIO O NULL
buscarComercio(mail){
    return  this.storage.buscarComercio(mail)
 }

 //ELIMINAR COMERCIO ESPECIFICO IDENTIFICADO POR MAIL
eliminarComercio(mail){
    this.storage.eliminarComercio(mail)
}

//MODIFICAMOS DATO DEL COMERCIO 
modificarTelefono(mail,telfNuevo){
    this.storage.actualizarTelefono(mail,telfNuevo)
}

}