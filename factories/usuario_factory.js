const ConsumidorFactory = require('../factories/consumidor_factory.js')
const ProveedorFactory = require('../factories/proveedor_factory.js')

module.exports =  class UsuarioFactory{
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