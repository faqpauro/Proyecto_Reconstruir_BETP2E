import { Servicio } from '../models/servicio.js'

export class ServicioFactory {
  constructor() {
  }

  crear(id, nombre, descripcion, telefono, direccion) {
    if (!id) {
      throw new Error('El id debe ser valido');
    }
    if (nombre.length < 3 || nombre.length > 50) {
      throw new Error('El nombre debe tener entre 3 y 50 caracteres');
    }
    if (descripcion.length < 10 || descripcion.length > 200) {
      throw new Error('La descripción debe tener entre 10 y 200 caracteres');
    }
    if (!telefono) {
      throw new Error('El número de teléfono debe ser valido');
    }
    if (!direccion) {
      throw new Error('La dirección debe ser valida');
    }
    return new Servicio(id, nombre, descripcion, telefono, direccion);
  }
}