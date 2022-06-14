//Trabajando con objetos
//Los objetos se trabajan con propiedades que son
//Palabras claves y valores

var miAuto = {
    marca: "Ford",
    modelo: "Escape",
    año: 2008,
    //Agregar un metodo de objeto es una propiedad que tiene una funcion
    detalleAuto: function(){
        console.log(`Auto ${this.modelo} ${this.año}`)
    }
}

//para extraer elementos de un objeto
miAuto.marca
miAuto.modelo
miAuto.año

//para entrar al metodo
miAuto.detalleAuto();

//Crear un constructor
function auto(marca, modelo, año){
    this.marca = marca
    this.modelo = modelo
    this.año = año
}

var miObjeto = new auto("Toyota","Corola","2021");