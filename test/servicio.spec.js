import chai from 'chai'
const expect = chai.expect
import {Servicio} from '../models/servicio.js'

// Crea una serie de pruebas para la clase Servicio
describe('Servicio', () => {
  // Crea una prueba para el contstructor
  describe('#constructor()', () => {
    it('debe crear un objeto Servicio con los valores proporcionados', function() {
        const servicio = new Servicio('0011', 'Gasista', 'Instalación y reparación de sistemas de gas', 1566962698, 'Juan B. Justo 2500', true);
        expect(servicio).to.be.an.instanceOf(Servicio);
        expect(servicio.nombre).to.equal('Gasista');
        expect(servicio.descripcion).to.include('gas');
        expect(servicio.telefono).to.equal(1566962698);
        expect(servicio.direccion).to.equal('Juan B. Justo 2500');
        expect(servicio.disponibilidad).to.equal(true);
      });
  })  
  // Crea una prueba para el método getDescripcion()
  describe('#getDescripcion', () => {
    it('Debe devolver la descripción del servicio', () => {
      const servicio2 = new Servicio('Electricista', 1555874588, 'Instalación y reparación de sistemas eléctricos', 'Urquiza 560', true);
      expect(servicio2.getDescripcion()).to.equal('Instalación y reparación de sistemas eléctricos');
    });
  });
});