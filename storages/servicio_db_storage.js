import { MongoClient } from 'mongodb';
import { Servicio } from '../models/servicio.js';

export class ServicioDBStorage {
  constructor() {
    this.url = "mongodb+srv://rosannyguzman:<54cHLlYx4GZKAb2n>@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority"
    this.dbName = "Reconstruir TP2"
    this.collectionName = 'servicios';
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

  async guardar(servicio) {
    try {
      await this.collection.insertOne(servicio);
    } catch (error) {
      console.error('Error al guardar el servicio en MongoDB:', error);
    }
  }

  async listarServicios() {
    try {
      return await this.collection.find().toArray();
    } catch (error) {
      console.error('Error al listar los servicios en MongoDB:', error);
      return [];
    }
  }

  async buscarServicio(nombre) {
    try {
      return await this.collection.findOne({ nombre });
    } catch (error) {
      console.error('Error al buscar el servicio en MongoDB:', error);
      return null;
    }
  }

  async eliminarServicio(nombre) {
    try {
      await this.collection.deleteOne({ nombre });
    } catch (error) {
      console.error('Error al eliminar el servicio en MongoDB:', error);
    }
  }
}
