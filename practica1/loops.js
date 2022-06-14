//Trabajando arrays con loops
var estudiantes = ["Maria", "Sergio", "Daniel"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

//For clasico
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

//For simplificado
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}

var frutas = ["Mango", "Pera", "Durazno", "Piña", "Coco"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}
while(frutas.length > 0){
    var fruta = frutas.shift();
    saludarEstudiantes(fruta)
}

var frutas = ["Mango", "Pera", "Durazno", "Piña", "Coco"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`)
}

var tamaño = frutas.length - 1 
while(tamaño >= 0){
    var fruta = frutas[tamaño]
    saludarEstudiantes(fruta)
    tamaño--
}

