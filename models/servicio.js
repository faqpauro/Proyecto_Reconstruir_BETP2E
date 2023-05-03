module.exports = class Servicio {
    constructor(nombre, descripcion, telefono, direccion){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.telefono = telefono;
        this.direccion = direccion;
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
    mostrarDescripcion(){
        console.log(this.descripcion);
    }

    agregarProductos(){} // Desarrollo pendiente

}
