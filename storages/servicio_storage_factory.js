import {ServicioStorage} from './servicio_storage'
import {ServicioDBStorage} from './servicio_db_storage'

export class ServicioStorageFactory{
    constructor(tipo){
        this.tipo = tipo
    }

    storage(){
        if (this.tipo === 'array') {
            return new ServicioStorage();
          } else if (this.tipo === 'db') {
            return new ServicioDBStorage();
          }
      
          throw new Error('El Tipo no existe: ' + this.tipo);
    }
}