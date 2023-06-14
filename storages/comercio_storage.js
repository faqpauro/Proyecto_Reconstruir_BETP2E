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

    buscarComercio(mail){
        return this.comercios.find(comercio => comercio.email === mail);
    }

    eliminarComercio(mail){
        this.comercios = this.comercios.filter(comercio => comercio.email !== mail);
    }

    //MODIFICAMOS DATO DEL COMERCIO 
    actualizarTelefono(mail,telefono){
        const comercio1 = this.buscarComercio(mail)
        if(comercio1 != null){
            comercio1.setTelefono(telefono)
        }
    }   
}