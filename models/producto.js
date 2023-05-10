export class Producto {
    constructor(nombre, codigo, descripcion, precio){
        this.nombre = nombre;
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidadInicial = 0;
        // CantidadInicial: Se dispondra de un metodo que permita settear la cantidad
    }
    getNombre(){
        return this.nombre;
    }
    getCodigo(){
        return this.codigo;
    }
    getDescripcion(){
        return this.descripcion;
    }
    getPrecio(){
        return this.precio;
    }
    setCantidadInicial(cantidad){
        this.cantidadInicial = cantidad;
    }
}
