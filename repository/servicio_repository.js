import {ServicioStorageFactory} from '../storages/servicio_storage_factory'

export class ServicioRepository{

    constructor(tipo = 'array'){
        this.storage = new ServicioStorageFactory(tipo).storage();
    }

    guardar(servicio){
        const servicioExistente = this.buscarServicio(servicio.getNombre());
        if(!servicioExistente){
            this.storage.guardar(servicio);
        }else{
            throw new Error("El servicio ya existe.");
        }
    }

    listarServicios(){
        return this.storage.listarServicios();
    }

    buscarServicio(nombre){
        return this.storage.buscarServicio(nombre);
    }

    eliminarServicio(nombre){
        this.storage.eliminarServicio(nombre);
    }
}