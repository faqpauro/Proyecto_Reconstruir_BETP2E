const Servicio = require('../models/servicio');

module.exports = class ServicioFactory{
    static crear(nombre, descripcion, telefono, direccion){
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
         return new Servicio(nombre, descripcion, telefono, direccion);
    }
}