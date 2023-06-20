/* DOMINIO: VENTA - COMPRA Y SUMINISTRO DE SERVICIOS DE CONSTRUCCION
PENDIENTE:

    1.- DESARROLLAR REGLAS DE NEGOCIOS DE ACUERDO A PROCESOS INTERNOS DEL SISTEMA
    COMPRA - VENTA - PRESTACION DE SERVICIO - REGISTRACION - ETC.
    2.- DESARROLLAR RESPECTIVOS ACCIONARES EN COMMANDS
    3.- POLITICAS - LIMITACIONES - [DIAGRAMA DE FLUJO POR FUNCIONALIDADES]
*/
/*
export class Contratar {
    constructor(){

    }
// USUARIO: CONTRATAR SERVICIO
// const usurioRepo = new UsuarioRepository();
// const servicioRepo = new ComercioRepository();

//METODO = COMMAND - METODO (4)

    contratarServicio(mail,id){
    const servicio = this.servicioRepo().buscarServicio(id)
    const usuario = this.usuarioRepo().buscarUsuario(mail)
            
            if(usuario.length !== 0){
                if(servicio.length !== 0){
                    if(existeServicio.lenght === 0){
                        usurioRepo.contratarServicio(usuario, servicio)
                }else{
                    console.log("Servicio Inexistente")
                }
            }else{
                console.log("Usuario Inexistente")
                }
            }

    }
}

  *** METODO = ROUTER - USUARIO ***    METODO (1)
router.post('/', async (req, res, next) => {
    try {
      await usuarioController.contratarServicio(req, res);
      res.status(200).send("Servicio agregado Exitosamente" );
    } catch (error) {
      res.sendStatus(500); 
    }
  });

  *** METODO = USUARIO CONTROLLER ***    METODO (2)
  async contratarServicio(req, res) {
    const { mail,id } = req.params;
    
    try {
      await this.usuarioUseCase.contratarServicio(mail, id);
    } catch (error) {
      next(error);
    }
  }

  *** METODO = USUARIO USE CASES *** METODO (3)
async contratarServicio(mail,id){

    const servicio = await new Contratar().contratarServicio(mail,id);
    //SI EL SERVICIO no FUE INSERTADO
     if (!servicio.acknowledged) {
      throw new Error("No se pudo insertar el servicio");
    }
}

*** METODO = REPOSITORIO DE USUARIO *** - METODO (5)
async contratarServicio(mail, servicio){
   return  this.storage.contratarServicio(mail, servicio)
    }  
}

*** METODO = DB STORAGE DE USUARIO *** - METODO (6)
asyn contratarServicio(mail1,servicio){
     const result = await this.collection.updateOne(
    { _id: mail1 }, // Filtro para encontrar el usuario por el correo
    { $push: { Servicios: servicio } } // Operador $push para agregar el servicio al array
  );
  return result
}



*** METODO = REPOSITORIO DE SERVICIO ***
// DESARROLLADO BUSCAR SERVICIO POR ID

*** METODO = REPOSITORIO DE USUARIO ***
// DESARROLLADO BUSCAR USUARIO POR MAIL












*/

