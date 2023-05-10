import {Consumidor} from '../models/consumidor.js'

export class ConsumidorFactory{
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
        if(!mail || !telefono){
            throw new Error("Mail o Telefono Invalido")
        }
        return new Consumidor(nombre, apellido, mail, telefono, password,tipo)
    }
}