import { MongoClient } from 'mongodb';

export class ComercioDBStorage {
  constructor() {
    this.url = "mongodb+srv://rosannyguzman:<54cHLlYx4GZKAb2n>@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority"
    this.dbName = "Reconstruir TP2";
    this.collectionName = 'comercios';
    this.client= new MongoClient(this.url)
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collecction = this.db.collection(this.collecctionName);
  }

  async connect() {
    try {
      await this.client.connect();
    } catch (error) {
      console.error('Error al conectar con MongoDB:', error);
    }
  }

  async guardar(comercio) {
    try {
      await this.collecction.insertOne({
        _id: comercio.getEmail(), //SE ESTABLECE COMO VALOR UNICO ID = MAIL
        nombre: comercio.getNombre(),
        telefono: comercio.getTelefono(),
        direccion: comercio.getDireccion(),
        descripcion: comercio.getDescripcion(),
      });
    } catch (error) {
      console.error('Error al guardar el comercio en MongoDB:', error);
    }
  }

  async listarComercios() {
    try {
      return await this.collection.find().toArray();
    } catch (error) {
      console.error('Error al listar los comercios en MongoDB:', error);
      return [];
    }
  }

  async buscarComercio(mailNuevo) {
    try {
      return await this.collection.find({ _id: mailNuevo }).toArray();;
    } catch (error) {
      console.error('Error al buscar el comercio en MongoDB:', error);
      return null;
    }
  }

  async eliminarComercio(mailNuevo) {
    try {
      await this.collecction.deleteOne({ _id: mailNuevo });
    } catch (error) {
      console.error('Error al eliminar el comercio en MongoDB:', error);
    }
  }
}