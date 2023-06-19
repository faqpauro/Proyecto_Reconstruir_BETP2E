import { MongoClient } from "mongodb";

//FUNCION: PERMITE EL ALMACENAMIENTO AUTOMATICO DE LOS REGISTROS EN LA NUBE DE MONGODB
export class UsuarioDBStorage {
  constructor() {
    //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
    this.url =
      "mongodb+srv://rosannyguzman:re15Con85truir@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority";
    this.dbName = 'ReconstruirTP2';
    //Trabajamos sobre la coleccion de Usuarios cargada en MongoDb
    this.collectionName = "usuario";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  //REALIZAMOS CONEXION CON MONGODB
  async connect() {  //PROBADO
    //AL SER UNA FUNCION ASINCRONICA, PARA QUE NO ESTE MARCADO ANEXAMOS PALABRA CLAVE ASYNC A LA FUNCION
    await this.client.connect();
  }
  /*METODOS DESARROLLADOS EN ESTA CLASE SON OBTENIDOS ESPECIALMENTE DE LA DOCUMENTACION
    https://www.npmjs.com/package/mongodb
*/

  //INSERTAMOS OBJETO USUARIO EN LA COLLECCION DE USUARIOS DE LA BASE.
  async guardar(usuario) { //SE DEBE AGREGAR EL NOMBRE EN EL MISMO ORDEN DE PARAMETROS DEL MODELS
    //Metodo insertOne, nos permite insertan un registro a la vez.
    try {
      await this.collection.insertOne({
        _id: usuario.getMail(), //SE ESTABLECE COMO VALOR UNICO ID = MAIL
        nombre: usuario.getNombre(),
        apellido: usuario.getApellido(),
        telefono: usuario.getTelefono(),
        direccion: usuario.getDireccion(),
        password: usuario.getPassword(),
      });
    } catch (e) {
      print(e);
    }
  }

  //TRAEMOS A LOS USUARIOS DEL REPO https://www.npmjs.com/package/mongodb
  async listarUsuarios() {  //--- METODO PROBADO FUNCIONAL
    console.log("arranca storage")
    const usuarios = await this.collection.find({}).toArray();
    console.log(usuarios)
    return usuarios;
  }

  //BUSCAMOS USUARIO ESPECIFICA POR MAIL --- METODO PROBADO FUNCIONAL
  async buscarUsuario(mailNuevo) {  
    //Este metodo permite buscar en el array de elementos por clave identificatoria "mail"
    return await this.collection.find({_id: mailNuevo }).toArray();
  }

  //ELIMINAR USUARIO POR MAIL --- METODO PROBADO FUNCIONAL
  async eliminarUsuario(mailNuevo) {
    return await this.collection.deleteOne({ _id: mailNuevo });
  }

  //MODIFICAMOS DATO DEL USUARIO --- METODO PROBADO FUNCIONAL
  async actualizarTelefono(mailNuevo, telefonoNuevo) {
    await this.collection.updateOne(
      {
        _id: mailNuevo,
      },
      {
        $set: {
          telefono: telefonoNuevo,
        },
      }
    );
  }
}
