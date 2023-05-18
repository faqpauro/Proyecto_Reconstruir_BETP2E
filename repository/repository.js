import {Producto} from '../models/producto.js'
class Repository{
    constructor(){
        this.coleccion = []
    }
    // CRUD
    create(elemento){
        this.coleccion.push(elemento)
    }
    read(id = null){
        if(id == null){
            return this.coleccion
        } else {
            return this.coleccion.find(elemento => elemento.codigo == id)
        }
    }
    update(id, actualizacion){
        let objeto = this.coleccion.find(elemento => elemento.codigo == id)
        
        objeto = {...objeto, ...actualizacion}
        
        this.coleccion = this.coleccion.map(elemento => {
            if(elemento.codigo == objeto.codigo){
                return objeto
            }else {
                return elemento
            }
        })
    }
    delete(id){
        this.coleccion = this.coleccion.filter((elemento) => {
            return elemento.codigo != id
        })
    }

}
const lista = new Repository

const producto1 = new Producto("Ladrillo", "011", "Un ladrillo", 150)
const producto2 = new Producto("Cemento", "012", "Bolsa de cemento", 400)
const producto3 = new Producto("Taladro", "013", "Un taladro phillips", 4000)

lista.create(producto1)
lista.create(producto2)
lista.create(producto3)
lista.delete("013")
console.log(lista.read())
