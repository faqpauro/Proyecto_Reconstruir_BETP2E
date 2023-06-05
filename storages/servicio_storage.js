export class ServicioStorage{
    constructor(){
        this.servicios = [];
    }
    
    guardar(servicio){
        this.servicios.push(servicio);
    }

    listarServicios(){
        return this.servicios;
    }

    buscarServicio(nombre){
        return this.servicios.find(servicio => servicio.nombre === nombre);
    }

    eliminarServicio(nombre){
        this.servicios = this.servicios.filter(servicio => servicio.nombre !== nombre);
    }
}