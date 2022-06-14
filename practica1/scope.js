//Trabajando Scope de variables en js

//Ejemplo uno varible scope global
var miNombre = "Arturo"

function nombre(){
    //Ejemplo var scope local
    var miApellido = "Bustamante"
    console.log(miNombre + " " + miApellido)
}