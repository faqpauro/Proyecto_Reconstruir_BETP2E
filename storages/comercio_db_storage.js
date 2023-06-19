import { MongoClient } from 'mongodb';

export class ComercioDBStorage {
  constructor() {
    //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
    this.url =
      "mongodb+srv://rosannyguzman:re15Con85truir@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority";
    this.dbName = 'ReconstruirTP2';
    //Trabajamos sobre la coleccion de Servicios cargada en MongoDb
    this.collectionName = "comercios";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  async connect() {
    await this.client.connect();
  }

  async guardar(comercio) {
    await this.collection.insertOne({
        _id: comercio.getMail(), //SE ESTABLECE COMO VALOR UNICO ID = MAIL
        nombre: comercio.getNombre(),
        telefono: comercio.getTelefono(),
        direccion: comercio.getDireccion(),
        descripcion: comercio.getDescripcion(),
      });
  }

  async listarComercios() {
      return await this.collection.find().toArray();
  }

  async buscarComercio(mail) {
    return await this.collection.find({ _id: mail }).toArray();
  }

  async eliminarComercio(mail) {
    return await this.collection.deleteOne({ _id: mail });
  }

  //MODIFICAMOS DATO DEL COMERCIO
  async actualizarTelefono(mail, telefonoNuevo) {
    return await this.collection.updateOne(
      {
        _id: mail,
      },
      {
        $set: {
          telefono: telefonoNuevo,
        },
      }
    );
  }
}