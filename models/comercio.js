export  class Comercio {
    constructor(nombre, descripcion, telefono, direccion, mail){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.telefono = telefono;
        this.direccion = direccion;
        this.mail = mail;
    }
    getNombre(){
        return this.nombre;
    }
    getDescripcion(){
        return this.descripcion;
    }
    getTelefono(){
        return this.telefono;
    }
    getDireccion(){
        return this.direccion;
    }
    getMail(){
        return this.mail;
    }
    setTelefono(telefonoNuevo){
        this.telefono = telefonoNuevo;
    }

}
