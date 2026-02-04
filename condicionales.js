/* let edad = 20;
let tieneIne = false;

if (edad >= 18) {
    console.log("Eres mayor de edad"); //Se ejecuta si es true
} else{
    console.log("Eres menor de edad"); //Se ejecuta si es false
}

let calificacion = 9;

if (calificacion >=9) {
    console.log("Eres increible");
} else if (calificacion >= 6) {
    console.log("Pansaste");
} else {
    console.log("Reprobaste");
}

//AND (Y)   &&
//OR (O)    ||
//NOT (Negacion) !

if (edad >= 18 && tieneIne ){
    console.log("Puedes votar");
} else {
    console.log("No puedes votar");
} */

let nota = Number(prompt("Ingrese calificacion a asignar: "));
document.writeln("Su calificación es: " + nota);

if (nota >= 90 ) {
    document.writeln(" Excelente");
} else if ( nota >= 75 && nota <= 89){
    document.writeln("Bien");
} else if ( nota >= 60 && nota <= 74){
    document.writeln(" Suficiente");
} else if (nota < 60 ) {
    document.writeln(" No aprueba");
}


let numero = prompt('ing numero');
numero = parseInt(numero);

if (numero % 2 === 0) {
    console.log('Es divisible entre 2');
} else {
    console.log('No es divisible entre 2');
}

console.log();

let esPremium = false;
let totalCompra = 1200;
let esFinDeSemana = true;

if (esPremium = true || (totalCompra > 1000 && esFinDeSemana)) {//Entre parentesis porque esos dossi tiene que ser obligatorios
    console.log('Descuento aplicado');
} else {
    console.log('No aplica el descuento');
}
