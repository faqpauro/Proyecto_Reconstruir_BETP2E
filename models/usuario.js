export class Usuario {

    constructor(nombre, apellido, mail, direccion, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.direccion = direccion;
        this.telefono = telefono;
        this.contrasenia = null;
        // this.tipo = null; tipo refiere al tipo de usuario, este puede ser consumidor o proveedor

    }
    getMail(){
        return this.mail;
    }
    getDireccion(){
        return this.direccion;
    }
    getTelefono(){
        return this.telefono;
    }
    getNombre(){
        return this.nombre;
    }
    getApellido(){
        return this.apellido;
    }
    setContrasenia(password){
        this.contrasenia = password;
    }
   // setTipo(valor){
   //     this.tipo = valor;
   // }
}
