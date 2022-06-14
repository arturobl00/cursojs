//Los arrays sirven para generar estructuras
var frutas = ["Melon", "Piña", "Mango", "Pera"]

console.log(frutas)

console.log(frutas.length)

console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

//Vamos a mutar el arreglo o modificar
//Push sirve para empujar o agregar elementos al final del array
frutas.push("Uvas")
//otro ejemplo seria mediante una var
var masFrutas = frutas.push("Uvas2")

//Pop se usa para eliminar el ultimo elemento del array
//Eliminar el ultimo elemento del array
frutas.pop()

//Metodo para agregar elementos pero al inicio de la lissta
frutas.unshift("Sandia")

//Para eliminar el elemento del inicio
frutas.shift()

//Metodo para conocer la posicion del elemento
frutas.indexOf("Mango")








