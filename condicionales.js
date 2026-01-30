let edad = 20;
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
}