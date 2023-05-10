import {ConsumidorFactory} from'../factories/consumidor_factory.js'
import {ProveedorFactory} from '../factories/proveedor_factory.js'

export class UsuarioFactory{
    constructor(tipo){
        this.tipo = tipo;
    }
    
    //CREAR USUARIO DEPENDIENDO DEL TIPO
    crear(tipo){
        if(tipo == 'Consumidor'){
            return new ConsumidorFactory
        }else{
            return new ProveedorFactory
        }
    }
}