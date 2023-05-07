const Proveedor = require("../models/proveedor.js")

module.exports =  class ProveedorFactory{
    constructor(nombre, apellido, mail, direccion, password,tipo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.direccion = direccion;
        this.password = password;
        this.tipo = tipo;
    }

    //METODO CREACION DE USUARIO CONSUMIDOR
    crear(nombre, apellido, mail, direccion, password,tipo){
        if(!mail || !direccion){
            throw new Error("Mail o Direccion Invalida")
        }
        return new Proveedor(nombre, apellido, mail, direccion, password,tipo)
    }
}