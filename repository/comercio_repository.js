import {ComercioStorageFactory} from "../storages/comercio_storage_factory.js"

export class ComercioRepository{
    //ALMACENAMIENTO DE DATOS
    //PARAMETRO POR DEFAULT, SI EL MISMO NO ESPECIFICADO TOMARA POR DEFAULT BD
    constructor(tipo='array'){ 
        this.storage= new ComercioStorageFactory(tipo).storage()
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

 //BUSCAR COMERCIO POR NOMBRE - RETORNA COMERCIO O NULL
buscarComercio(nombre){
    return  this.storage.buscarComercio(nombre)
 }

 //ELIMINAR COMERCIO ESPECIFICO IDENTIFICADO POR NOMBRE
eliminarComercio(nombre){
    this.storage.eliminarComercio(nombre)
}

}