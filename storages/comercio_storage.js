export class ComercioStorage{
    constructor(){
        this.comercios = [];
    }
    
    guardar(comercio){
        this.comercios.push(comercio);
    }

    listarComercios(){
        return this.comercios;
    }

    buscarComercio(nombre){
        return this.comercios.find(comercio => comercio.nombre === nombre);
    }

    eliminarComercio(nombre){
        this.comercios = this.comercios.filter(comercio => comercio.nombre !== nombre);
    }
}