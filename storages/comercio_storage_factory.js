import {ComercioStorage} from './comercio_storage'
import {ComercioDBStorage} from './comercio_db_storage'

export class ComercioStorageFactory{
    constructor(tipo){
        this.tipo = tipo
    }

    storage(){
        if (this.tipo === 'array') {
            return new ComercioStorage();
          } else if (this.tipo === 'db') {
            return new ComercioDBStorage();
          }
      
          throw new Error('El Tipo no existe: ' + this.tipo);
    }
}