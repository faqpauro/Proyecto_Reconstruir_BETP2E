const Producto = require('../models/produto.js')

module.exports = class ProductoFactory{
    static crear(nombre, codigo, descripcion, precio, cantidadInicial) {
        if (!codigo && !precio){
            throw new Error("El codigo y el precio son obligatorios")
        }
        const producto = new Producto(nombre, codigo, descripcion, precio);
        producto.setCantidadInicial(cantidadInicial);
        return producto;
    }
} 