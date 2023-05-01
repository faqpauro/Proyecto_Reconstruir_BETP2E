let chai = require ('chai')
let expect = chai.expect
const persona = "Marcela"
// CLASE: USARIO

describe('Persona',function(){
    describe('VerificarCadenaCaracteres()', function(){
        it('Sea una cadena', function(){
             expect(persona).to.be.a('string')
        })
    })
})
