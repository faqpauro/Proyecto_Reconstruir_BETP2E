export class Servicio {
    constructor(id, nombre, descripcion, telefono, direccion, disponibilidad){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.telefono = telefono;
        this.direccion = direccion;
        this.disponibilidad = disponibilidad;
    }
    getId(){
        return this.id;
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

    obtenerDisponibilidad(){
        return this.disponibilidad;
    }

}
