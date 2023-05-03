let chai = require ('chai')
let expect = chai.expect
const Servicio = require ('../models/servicio');

// Crea una serie de pruebas para la clase Servicio
describe('Servicio', () => {
  // Crea una prueba para el contstructor
  describe('#constructor()', () => {
    it('debe crear un objeto Servicio con los valores proporcionados', function() {
        const servicio = new Servicio('Gasista', 'Instalación y reparación de sistemas de gas', 1566962698, 'Juan B. Justo 2500');
        expect(servicio).to.be.an.instanceOf(Servicio);
        expect(servicio.nombre).to.equal('Gasista');
        expect(servicio.descripcion).to.include('gas');
        expect(servicio.telefono).to.equal(1566962698);
        expect(servicio.direccion).to.equal('Juan B. Justo 2500');
      });
  })  
  // Crea una prueba para el método getDescripcion()
  describe('#getDescripcion', () => {
    it('Debe devolver la descripción del servicio', () => {
      const servicio2 = new Servicio('Electricista', 'Instalación y reparación de sistemas eléctricos', 1555874588, 'Urquiza 560');
      expect(servicio2.getDescripcion()).to.equal('Instalación y reparación de sistemas eléctricos');
    });
  });
});