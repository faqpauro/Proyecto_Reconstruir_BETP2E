import { MongoClient } from "mongodb";
//FUNCION: PERMITE EL ALMACENAMIENTO AUTOMATICO DE LOS REGISTROS EN LA NUBE DE MONGODB
export class UsuarioDBStorage {
  constructor() {
    //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
    this.url =
      "mongodb+srv://rosannyguzman:re15Con85truir@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority";
    this.dbName = 'ReconstruirTP2';
    //Trabajamos sobre la coleccion de Usuarios cargada en MongoDb
    this.collecctionName = "usuario";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collecction = this.db.collection(this.collecctionName);
  }

  //REALIZAMOS CONEXION CON MONGODB
  async connect() {
    //AL SER UNA FUNCION ASINCRONICA, PARA QUE NO ESTE MARCADO ANEXAMOS PALABRA CLAVE ASYNC A LA FUNCION
    await this.client.connect();
  }
  /*METODOS DESARROLLADOS EN ESTA CLASE SON OBTENIDOS ESPECIALMENTE DE LA DOCUMENTACION
    https://www.npmjs.com/package/mongodb
*/

  //INSERTAMOS OBJETO USUARIO EN LA COLLECCION DE USUARIOS DE LA BASE.
  async guardar(usuario) {
    //Metodo insertOne, nos permite insertan un registro a la vez.
    try {
      await this.collecction.insertOne({
        _id: persona.getMail(), //SE ESTABLECE COMO VALOR UNICO ID = MAIL
        nombre: persona.getNombre(),
        apellido: persona.getApellido(),
        telefono: persona.getTelefono(),
        direccion: persona.getDireccion(),
        password: persona.getPassword(),
      });
    } catch (e) {
      print(e);
    }
  }

  //TRAEMOS A LOS USUARIOS DEL REPO https://www.npmjs.com/package/mongodb
  async listarUsuarios() {
    return await this.collecction.find({}).toArray();
  }

  //BUSCAMOS USUARIO ESPECIFICA POR MAIL
  async buscarUsuario(mailNuevo) {
    //Este metodo permite buscar en el array de elementos por clave identificatoria "mail"
    return await this.collecction.find({ _id: mailNuevo }).toArray();
  }

  //ELIMINAR USUARIO POR MAIL
  async eliminarUsuario(mailNuevo) {
    return await this.collecction.deleteOne({ _id: mailNuevo });
  }

  //MODIFICAMOS DATO DEL USUARIO
  async actualizarTelefono(mailNuevo, telefonoNuevo) {
    this.collecction.updateOne(
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
