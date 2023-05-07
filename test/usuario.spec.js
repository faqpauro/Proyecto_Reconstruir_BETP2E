const UsuarioFactory = require('../factories/usuario_factory.js')
const Consumidor = require ('../models/consumidor.js')
let chai = require ('chai')
let expect = chai.expect


const persona1 =  (new UsuarioFactory).crear("Consumidor").crear('Marcela','Guzman','Marcela.guzman@gmail.com','Callao 250', 1154854526,"352565")
const persona2 =  (new UsuarioFactory).crear("Consumidor").crear('Maria','Guzman','Maria.guzman@gmail.com', 'Medrano 555', 1154854525,"777777")

describe('Usuario',function(){
    describe('#Constructor', function(){
        it('Correcta Construccion', function(){
            //Verificar que sea una intancia de usuario
             expect(persona1).to.be.a.instanceOf(Consumidor)
        })
    })
})

describe('Usuario',function(){
    describe('#Creacion', function(){
        it('Mail Valido', function(){
            //Verificar que el mail sea valido 
             expect(persona2.getMail()).to.equal('Maria.guzman@gmail.com')
        })
    })
})

describe('Usuario',function(){
    describe('#Comparacion de mail usuarios', function(){
        it('Son diferentes', function(){
            //Verificar que no coincidan los mails 
             expect(persona1.getMail()).to.not.equal(persona2.getMail())
        })
    })
})




