let chai = require ('chai')
let expect = chai.expect
const Usuario = require ('../models/usuario.js')

const persona1 = new Usuario('Marcela','Guzman','Marcela.guzman@gmail.com','Av Cordoba 250', 1154854526)
 const persona2 = new Usuario('Maria','Guzman','Maria.guzman@gmail.com','Av Cordoba 230', 1154854525)

describe('Usuario',function(){
    describe('#contructor', function(){
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

describe('Usuario',function(){
    describe('#ValidarPasswordInicial', function(){
        it('Coincide con un String', function(){
            //Establecemos la Password Inicial
            const passwordInicial = persona1.setContrasenia('Mar1253')
            //Verificamos que corresponda un
             expect(typeof persona1.contrasenia).to.equal('string')
        })
    })
})


