import {ComercioDBStorage} from "../storages/comercio_db_storage.js"

export class ComercioRepository{
    //ALMACENAMIENTO DE DATOS POR DEFECTO SE HACE USO DE CONEXION CON DBMONGO
    constructor(){ 
        this.storage= new ComercioDBStorage();
    }
//DESARROLLO DE CRUD

//GUARDAMOS Al COMERCIO EN NUESTRO REPOSITORIO DE ACUERDO AL TIPO RECIBIDO
 async guardar(comercio){
    //Trae al comercio si existe en bd
    const comercioBuscado =  await this.buscarComercio(comercio.getMail());
    
    if(comercioBuscado.length === 0){
        this.storage.guardar(comercio);
    }else{
        throw new Error("El comercio ya existe.");
    }  
}

//LISTAR COMERCIOS DEL REPOSITORIO INDICADO
listarComercios(){
    return this.storage.listarComercios();
}

 //BUSCAR COMERCIO POR MAIL - RETORNA COMERCIO O NULL
buscarComercio(mail){
    return  this.storage.buscarComercio(mail);
 }

 //ELIMINAR COMERCIO ESPECIFICO IDENTIFICADO POR MAIL
eliminarComercio(mail){
    return this.storage.eliminarComercio(mail);
}

//MODIFICAMOS DATO DEL COMERCIO 
modificarTelefono(mail,telfNuevo){
    return this.storage.actualizarTelefono(mail,telfNuevo);
}

}