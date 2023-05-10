import chai from 'chai'
const expect = chai.expect
import {Producto} from '../models/producto.js'

// Crea una serie de pruebas para la clase Producto
describe('Producto', () => {
  // Crea una prueba para el contstructor
  describe('#constructor()', () => {
    it('debe crear un objeto Producto con los valores proporcionados', function() {
        const producto = new Producto('Ladrillo', '1234', 'Un ladrillo', 10.99);
        expect(producto).to.be.an.instanceOf(Producto);
        expect(producto.getNombre()).to.equal('Ladrillo');
        expect(producto.getCodigo()).to.equal('1234');
        expect(producto.getDescripcion()).to.equal('Un ladrillo');
        expect(producto.getPrecio()).to.equal(10.99);
        expect(producto.cantidadInicial).to.equal(0);
      });
  })  
  // Crea una prueba para el método setCantidadInicial()
  describe('#setCantidadInicial()', () => {
    it('la cantidadInicial debería ser un valor numérico', () => {
        // Crea una instancia de la clase Producto
        const producto = new Producto('Ladrillo', '1234', 'Un ladrillo', 10.99);

        // Settea la cantidad inicial del producto a un valor numérico
        producto.setCantidadInicial(10);

        // Verifica que la cantidad inicial del producto sea un valor numérico
        expect(typeof producto.cantidadInicial).to.equal('number');
    })
  });
});

