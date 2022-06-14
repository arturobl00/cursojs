//Fucionar Array y Objetos
//Vamos a trabajar con metodos de exploracion
//de arrays


var artuculos = [
    {nombre: "Bici", costo: 2000,},
    {nombre: "Pantalla", costo: 8900},
    {nombre: "Libro", costo: 300},
    {nombre: "Celular", costo: 7000},
    {nombre: "Computadora", costo: 20000},
    {nombre: "Teclado", costo: "1000"},
    {nombre: "Audifonos", costo: 400}
]

 //Primer metodo filter cuestiona
var articulosFiltrados = artuculos.filter(function(artuculo){
    return artuculo.costo <=500
})

//Segundo metodo map mapea
var nombreArticulos = artuculos.map(function(artuculo){
    return artuculo.nombre
})

//Tercer Metodo Find para encontar elementos
var encuentaArticulos = artuculos.find(function(artuculo){
    return artuculo.nombre === "Computadora"
})
