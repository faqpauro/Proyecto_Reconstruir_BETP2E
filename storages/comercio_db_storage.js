import { MongoClient } from 'mongodb';

export class ComercioDBStorage {
  constructor() {
    this.url = "mongodb+srv://rosannyguzman:<54cHLlYx4GZKAb2n>@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority"
    this.dbName = "Reconstruir TP2"
    this.collectionName = 'comercios';
    this.client= new MongoClient(this.url)
    this.connect();
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      this.collection = this.db.collection(this.collectionName);
    } catch (error) {
      console.error('Error al conectar con MongoDB:', error);
    }
  }

  async guardar(comercio) {
    try {
      await this.collection.insertOne(comercio);
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

  async buscarComercio(nombre) {
    try {
      return await this.collection.findOne({ nombre });
    } catch (error) {
      console.error('Error al buscar el comercio en MongoDB:', error);
      return null;
    }
  }

  async eliminarComercio(nombre) {
    try {
      await this.collection.deleteOne({ nombre });
    } catch (error) {
      console.error('Error al eliminar el comercio en MongoDB:', error);
    }
  }
}