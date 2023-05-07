const Consumidor = require("../models/consumidor.js")

module.exports =  class ConsumidorFactory{
    constructor(nombre, apellido, mail, telefono, password, tipo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.password = password;
        this.tipo= tipo;
    }

    //METODO CREACION DE USUARIO CONSUMIDOR
    crear(nombre, apellido, mail, telefono, password,tipo){
        if(!mail){
            throw new Error("Mail Invalido")
        }
        return new Consumidor(nombre, apellido, mail, telefono, password,tipo)
    }
}