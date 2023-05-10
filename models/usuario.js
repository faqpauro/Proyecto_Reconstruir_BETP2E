export class Usuario {

    constructor(nombre, apellido, mail, direccion, telefono, password,tipo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.direccion = direccion;
        this.telefono = telefono;
        this.password = password;
        this.tipo = tipo;

    }
    getMail(){
        return this.mail;
    }
    getDireccion(){
        return this.direccion;
    }
    getTelefono(){
        return this.telefono;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    
   
}
