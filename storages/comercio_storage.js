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

    buscarComercio(mailNuevo){
        return this.comercios.find(comercio => comercio.email === mailNuevo);
    }

    eliminarComercio(mailNuevo){
        this.comercios = this.comercios.filter(comercio => comercio.email !== mailNuevo);
    }
}