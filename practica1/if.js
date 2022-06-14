//Condicionales reglas para poder validar que algo es true o false
//En este ejemplo analizaremos el uso del if el cual ejecuta solo lo 
//que es verdadero

if (true){
    console.log("Hola true")
}

if (false){
    console.log("Hola false")
}

if(false){
    console.log("Hola false")
}
else{
    console.log("Hola true")
}

var edad = 18

if(edad === 18){
    console.log("Puedes votar, será tu 1ra votacion")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aun no puedes votar")
}

//if ternario
var numero = 2
var resultado = numero === 1 ? "Si soy uno" : "no soy uno"



