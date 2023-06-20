export class Usuario {

    constructor(nombre, apellido, mail, direccion, telefono, password){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.direccion = direccion;
        this.telefono = telefono;
        this.password = password;
        this.servicios = [];

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

    getPassword(){
        return this.password;
    }

    setTelefono(telefonoNuevo){
        this.telelfono = telefonoNuevo;
    }
    //cambio
    getServicios(){
        return this.servicios;
    }
    
   
}
