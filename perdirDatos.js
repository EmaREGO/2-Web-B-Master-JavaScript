console.log("Hola, me llamo Emanuel");
console.log('Cómo te llamas?'); //No pasa nada si se usa comilla simple o doble

let nombre = prompt("Como te llamas"); //Muestra una ventana emergente y un recuadro para rellenar
//document.write("Tu nombre es: " +nombre);

let fecha = prompt("Cuando es tu cumple?"); 
//document.write("Tu cumple es es: " +fecha);

let mascotas = prompt("Cuantas mascotas tienes?"); 
//document.write("Tienes" +mascotas +" Mascotas");

alert(nombre); //Para poner el mismo texto que se escribio en la ventanaalert(fecha);
alert(fecha); //Se ocupa para depurar codigo no para mostrar info al usuario final
alert(mascotas);

/* 
Preguntar cuantos perros tienes
Preguntar cuantos gatos tienes
Mostrar como respuesta: Tienes en total x mascotas
*/
let perros = prompt("Cuantos perros tienes?");
document.writeln("Cantidad de perros: " + perros);
let gatos = prompt("Cuantos gatos tienes?");
document.writeln("Cantidad de gatos: " + gatos);
let cantidadMascotas = parseInt(perros) + parseInt(gatos);
document.writeln("Tienes en total: " + cantidadMascotas + " mascotas");
//ParseInt es tolerante ante los String

let hermanos = Number(prompt("Cuantos hermanos tienes..."));
let hermanas = Number(prompt("Cuantas hermanas..."));

//Number es estricto a la hora de pedir numeros
let totalH = hermanos + hermanas;
console.log("En total tienes " + totalH + " Hermanos.");