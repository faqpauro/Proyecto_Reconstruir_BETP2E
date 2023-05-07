let chai = require ('chai')
let expect = chai.expect
const Comercio = require ('../models/comercio.js')

const comercio1 = new Comercio("Construcciones J&G","Articulos de Construccion","1148963254","Av. Del Libertado 2540","construccionesjg@gmail.com")

describe('Comercio',function(){
    describe('#contructor', function(){
        it('Correcta Construccion', function(){
            //Verificar que sea una intancia de comercio
             expect(comercio1).to.be.a.instanceOf(Comercio)
        })
    })
})

describe('Comercio',function(){
    describe('#Creacion', function(){
        it('Telefono Valido', function(){
            //Verificar que el telefono sea valido 
             expect(comercio1.getTelefono()).to.equal('1148963254')
        })
    })
})




