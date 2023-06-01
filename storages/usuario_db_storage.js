import { MongoClient } from "mongodb"
//FUNCION: PERMITE EL ALMACENAMIENTO AUTOMATICO DE LOS REGISTROS EN LA NUBE DE MONGODB
export class UsuarioDBStorage{

     constructor(){
        //EN EL CONSTRUCTOR SE ESTABLECE TODO LA NECESARIO PARA HACER LA CONEXION
        this.url = "mongodb+srv://rosannyguzman:<54cHLlYx4GZKAb2n>@cluster0.yuyibt9.mongodb.net/?retryWrites=true&w=majority"
        this.dbName="Reconstruir TP2"
        //Trabajamos sobre la coleccion de Usuarios cargada en MongoDb
        this.collecctionName="usuarios"
        this.client= new MongoClient(this.url)
        this.connect()
        this.db = this.client.db(this.dbName)
        this.collecction = this.db.collection(this.collecctionName)
    }

    //REALIZAMOS CONEXION CON MONGODB
async connect(){
    //AL SER UNA FUNCION ASINCRONICA, PARA QUE NO ESTE MARCADO ANEXAMOS PALABRA CLAVE ASYNC A LA FUNCION
    await this.client.connect()                                        
}

}