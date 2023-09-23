// Tipos de dato primitivo de JS
//Number (Integers and Floats) 10 10.5 2000
let numero = 10;
let numeroDepuertas = 4;
let numeroPi = 3.14;
let valor_matricula = 2_000_000;
let numeroObjeto = new Number(10.25);

//String  (Cadena de caracteres) "Hola mundo"
let saludo = "Hola";
let despedida = "Chao";

//Boolean -> true or false 
let esCierto = true;
let esFalso = false;
let booleanComoObjeto = new Boolean (true);

//Object  -> {} -> new object()
let persona ={
    nombre: "Jaider",
    apellido: "Zapata"
}

//Array  -> []
let arregloObjetos = [persona, empleado];

//BegInt (Valores numericos muy grandes)  100n -> new BegInt(10)
let numeroGrande = 100n;
let numeroGrandeComoObjeto = new BigInt(100); 

//Undefined (Valor por defecto que tienen las variables si no son asignadas)
let variableUndefined;
let variableUndefined2 = undefined;

//Null -> (Se asigna cuando quieo especificar que una variable esta vacía)
let variableNula = null;

//Symbol -> (Se utiliza para crear valores únicos)
let simbolo = new Symbol ("Simbolo UNO");