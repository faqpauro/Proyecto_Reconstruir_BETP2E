import {ServicioDBStorage} from "../storages/servicio_db_storage.js"

export class ServicioRepository{
    //ALMACENAMIENTO DE DATOS POR DEFECTO SE HACE USO DE CONEXION CON DBMONGO
    constructor(){
        this.storage = new ServicioDBStorage();
    }

    async guardar(servicio){
        const servicioExistente = await this.buscarServicio(servicio.getId());
        if(servicioExistente.length === 0){
            this.storage.guardar(servicio);
        }else{
            throw new Error("El servicio ya existe.");
        }
    }

    listarServicios(){
        return this.storage.listarServicios();
    }

    buscarServicio(id){
        return this.storage.buscarServicio(id);
    }

    eliminarServicio(id){
        return this.storage.eliminarServicio(id);
    }

    modificarDescripcion(id,descripcionNueva){
        return this.storage.actualizarDescripcion(id,descripcionNueva)
    }
}