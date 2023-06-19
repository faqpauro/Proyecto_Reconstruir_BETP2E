import {Usuario} from '../models/usuario.js'

export class UsuarioFactory{
    constructor(){
        //this.nombre = nombre;
        //this.apellido = apellido;
        //this.mail = mail;
        //this.telefono = telefono;
        //this.direccion = direccion;
        //this.password = password;
    }

    //METODO CREACION DE USUARIO CONSUMIDOR
    crear(nombre, apellido, mail, direccion, telefono, password){
        if(!mail || !telefono){
            throw new Error("Mail o Telefono Invalido")
        }
        return new Usuario (nombre, apellido, mail, direccion, telefono, password)
    }
}