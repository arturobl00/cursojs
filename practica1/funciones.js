//Hay dos tipo de funciones declarativas y de expresion

//Funcion declarativa
function miFuncion(){
    //Las funciones pueden crear valores y variables
    return 3;
}
//Mandar a llamar mi funcion
var res = miFuncion()
console.log(res)

//Funcion de expresion
var miFuncion1 = function(a,b){
    return a + b;
}
//Mandar a llamar mi variable de tipo funcion
var res2 = miFuncion1(3,4)
console.log(res2)
