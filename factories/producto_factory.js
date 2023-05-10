import {Producto} from '../models/producto.js'

export class ProductoFactory{
    static crear(nombre, codigo, descripcion, precio, cantidadInicial) {
        if (!codigo || !precio){
            throw new Error("El codigo o precio es invalido")
        }
        const producto = new Producto(nombre, codigo, descripcion, precio);
        //SE SETEA LA CANTIDAD PASADA
        producto.setCantidadInicial(cantidadInicial);
        return producto;
    }
} 