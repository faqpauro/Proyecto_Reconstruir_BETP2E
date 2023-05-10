import {Comercio} from '../models/comercio.js'

export class ComercioFactory{
   
    crear(nombre, descripcion, telefono, direccion, email){
        if(!email || !direccion){
            throw new Error("Email o Direccion Invalida")
        }
       return new Comercio(nombre, descripcion, telefono, direccion, email) 
    }
}
