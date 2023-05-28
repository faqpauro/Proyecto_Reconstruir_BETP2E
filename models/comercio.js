export  class Comercio {
    constructor(nombre, descripcion, telefono, direccion, email){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
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
    getEmail(){
        return this.email;
    }

}
