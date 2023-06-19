import { MongoClient } from 'mongodb';

export class ServicioDBStorage {
  constructor() {
    //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
    this.url =
      "mongodb+srv://rosannyguzman:re15Con85truir@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority";
    this.dbName = 'ReconstruirTP2';
    //Trabajamos sobre la coleccion de Servicios cargada en MongoDb
    this.collectionName = "servicios";
    this.client = new MongoClient(this.url);
    this.connect();
    this.db = this.client.db(this.dbName);
    this.collection = this.db.collection(this.collectionName);
  }

  async connect() {
    await this.client.connect();
  }

  async guardar(servicio) {
        await this.collection.insertOne({
        _id: servicio.getId(), // Establecer el valor único del ID si es necesario
        nombre: servicio.getNombre(),
        descripcion: servicio.getDescripcion(),
        telefono: servicio.getTelefono(),
        direccion: servicio.getDireccion(),
        disponibilidad: servicio.obtenerDisponibilidad()
      });
  }

  async listarServicios() {
    const servicios = await this.collection.find().toArray();
    return servicios;
  }

  async buscarServicio(id) {
      return await this.collection.find({ _id: id }).toArray();;
  }

  async eliminarServicio(id) {
      return await this.collection.deleteOne({ _id: id });
  }

  async actualizarDescripcion(id, descripcionNueva) {
    return await this.collection.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          descripcion: descripcionNueva,
        },
      }
    );
  }
}
