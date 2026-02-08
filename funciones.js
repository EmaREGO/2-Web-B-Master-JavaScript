function saludar(nombre){ //Nombre es un parametro
    //Lo que va a hacer la funcion
    return 'Hola ' + nombre; //Retornando el resultado
}   //Es la funcion que esta englobada todo dentro de ella
//Ayuda para reutilizar codigo y no hacer lo de abajo varias veces

saludar('Ana'); //Llamando a mi funcion saludar

let saludo = saludar('Fatima'); //Se esta hablando directamente a lo que se guardo en la memoria

console.log(saludar('Ana'));

console.log(saludo);

function sumar(a , b){
    console.log(a + b); //RESULTADO EN CONSOLA, SOLO IMPRIME EL resultado
}
sumar(2,3);

function restar(num1, num2)
{
    let resultado = num1 - num2;   //Ese let esta dentro de solo esa casita
    return resultado; // VARIABLE LOCAL estando dentro de ella no esta en el mismo plano que otras variables con mismo nombre
} //RETURN ENTREGA UN VALOR PARA USARLO DESPUES

//Scope global, accesible desde cualquier parte del programa
//Scope local, solo dentro de la funcion donde se declara

console.log(restar(10,7));

let resultado; //Variable local

function sinReturn() {
    let x = 5;
}

//Logra ejecutar la funcion pero NO regresa nada
console.log(sinReturn()) //Retorna undefined porque no hay valor, es indefinido

console.log(resultado); //No hay dato 

function multiplicar(dato1, dato2){
    return dato1 * dato2;
}

console.log(multiplicar(4)); //Not A Number,hace falta pasarle un argumento

// console.log(Ana); Error de variable no definida


//ARROW FUNCTION - FUNCION DE FLECHA
//Forma moderna de hacer funciones
const dividir = (a,b) => a/b; //Return automatico

console.log(dividir(15,2));

const suma = (a,b) => { //Cuando se ponen llaves Una funcion mas larga con llave {} no tiene RETURN automatico
    return a + b;
}

console.log(suma(3,4));

const multi = (a,b) => { return a * b}; 
console.log(multi(10,5));

//Funcion anonima porque no se sabe el nombre, un uso comun es callbacks
//Se usan para eventos, como en el frontend, arreglos, FUNCIONES DE UNA SOLA VEZ

//Funcion Anonima (no necesita darle nombre, ejecuta algo puntual)

setTimeout(function (){
    console.log("Esto se ejecuta despues...")
}, 5000); //callback uso mas comun

/* 
Cuando NO utilizar funciones anonimas

-Cuando se tiene que reutilizar muchas veces
-Tiene logica grande
-Necesita ser testeado
-Necesita claridad

*/

//MAP Y FILTER

function mascotas(a,b,c){ //Parametros
    console.log("Nombres de las mascotas: ", a + b + c);
}

mascotas('Puppy', 'Bombon', 'Milaneso'); //Valores

//Crear 3 funciones
//Una para calcular el area de un triangulo


//Area de triangulo

const areaTriangulo = (base , altura) => { 
    return (base * altura) /2;
}

console.log(areaTriangulo(10,5));

// Verificar si un numero es primo

let num1 = 1;
let num2 = 5;

function primo( num2 ) {
    if ( num2 %2 === 0  ){
        return("Tu numero no es primo");
    } else {
        return("Tu numero es primo");
    }
}

console.log(primo(num2));
console.log(primo(num1));

let a = 0;
let b = 1;
let c = [];

function generarFibonacci(n) {
    let s = 1;
    let p ;
    for (let i = 0; i < n; i++){
        p = i + s++;
        console.log(p);
        i = i++;
    }
}

console.log(generarFibonacci(20));

function gFibonacci() {
    var fibonacci[0];
    fib
    for (let i = 0; i < n; i++){
        p = i + s++;
        console.log(p);
        i = i++;
    }
}





