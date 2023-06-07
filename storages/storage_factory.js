import {UsuarioStorage} from "../storages/usuario_storage.js"
import {ServicioStorage} from "../storages/servicio_storage.js"
import {ComercioStorage} from "../storages/comercio_storage.js"

export class StorageFactory{
    //ESTA CLASE REPRESENTA LA CONEXION ENTRE USUARIO.REPOSITORY Y LOS STORAGE A USAR
    //UNICAMENTE CONTIENE UN CONSTRUCTOR QUE RECIBE UN  "tipo", ESTO HACE REFERENCIA AL TIPO DE STORAGE A USAR 
    constructor(tipo,modelo){
        this.tipo = tipo
        this.modelo = modelo
    }

    storage(){
        if(this.tipo = 'array'){
            switch (modelo) {
                case 'usuario':
                    return new UsuarioStorage
                case 'servicio':
                    return new ServicioStorage
                case 'comercio':
                    return new ComercioStorage
            }
        }
        if(this.tipo = 'db'){
            switch (modelo) {
                case 'usuario':
                    return new UsuarioStorage
                case 'servicio':
                    return new ServicioStorage
                case 'comercio':
                    return new ComercioStorage
            }
        }
    }  
}