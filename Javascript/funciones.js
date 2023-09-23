//Funciones
function sumar(numeroUno, numeroDos) { //normalmente los nombres de las funciones
    return numeroUno + numeroDos;

}

let sumarVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
} ;

let sumarVersionTres = (numeroUno, numeroDos) =>{
    console.log("Soy el arrow function");
    return numeroUno + numeroDos;
}; //Arrow function / tambien es funcion anonima 

let.funcionUno = (numeroUno, numeroDos, funcionDos){
    console.log("Estoy dentro de la funcion Uno")
    
}

let funcionTres = (numeroUno, numeroDos) =>{
    console.log ("Voy a restar");
    return numeroUno - numeroDos;
};

console.log(sumar(5,48));
console.log("hola", "mundo");
console.log(sumarVersionDos(10, 20));
console.log(sumarVersionTres(40, 56.8));
console.log(funcionUno(10, 40, sumarVersionTres));