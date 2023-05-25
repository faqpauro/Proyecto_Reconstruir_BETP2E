import {UsuarioStorage} from "../storages/usuario_storage.js"

export class UsuarioStorageFactory{
    //ESTA CLASE REPRESENTA LA CONEXION ENTRE USUARIO.REPOSITORY Y LOS STORAGE A USAR
    //UNICAMENTE CONTIENE UN CONSTRUCTOR QUE RECIBE UN  "tipo", ESTO HACE REFERENCIA AL TIPO DE STORAGE A USAR 
    constructor(tipo){
        this.tipo =tipo
    }

    storage(){
       /* if(this.tipo ='db'){
            return new UsuarioDBStorage //POR DESARROLLAR
        }*/
        
        if(this.tipo = 'array'){
            return new UsuarioStorage 
        } 
        throw new Error ("El Tipo no existe: "+this.tipo)
    }
}