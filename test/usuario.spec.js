import chai from 'chai'
const expect = chai.expect
import {UsuarioFactory} from '../factories/usuario_factory.js'
import { Usuario } from '../models/usuario.js'


const persona1 =  (new UsuarioFactory).crear('Marcela','Guzman','Marcela.guzman@gmail.com','Callao 250', 1154854526,"352565")
const persona2 =  (new UsuarioFactory).crear('Maria','Guzman','Maria.guzman@gmail.com', 'Medrano 555', 1154854525,"777777")

describe('Usuario',function(){
    describe('#Constructor', function(){
        it('Correcta Construccion', function(){
            //Verificar que sea una intancia de usuario
             expect(persona1).to.be.a.instanceOf(Usuario)
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




