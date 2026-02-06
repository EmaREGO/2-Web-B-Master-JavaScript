//Repite mientras la condicion sea true

/* let i = 1;

while (i <= 10) {
    console.log("while:", i)
    i++; //Mientras seas igual o menor a tres va, y se repite
}   

let entrada = "";

while(entrada !== 'salir'){
    entrada = prompt('Escribe algo')
} */
/* 
/* console.log('Yeih, saliste'); */

/* let frutas = ['Manzana', 'Pera', 'Lulo', 'Cereza', 'Mango', 'Papaya'];

console.log(frutas[3]);
console.log(frutas[2]);
console.log(frutas[0]);

console.log(frutas.length);
//Leght empieza desde 1
for (let indice = 0; indice < frutas.length; indice++){
    console.log("Fruta = ", frutas[indice])
}

console.log('Metodos de los arreglos')
let alumnos = []; */

//Metodo push agrega al final
/* alumnos.push("Ana");
alumnos.push("Bruno");
alumnos.push("Fernanda");
alumnos.push("Natalia");

console.log(alumnos);

//Elimina quita el ultimo
alumnos.pop();

console.log(alumnos);
 */
//Metodo unshift agrega al principio
/* alumnos.unshift("Nina");
alumnos.unshift("Misael");
alumnos.unshift("Beto");

console.log(alumnos);

//Metodo shift quita al principio
alumnos.shift();
console.log(alumnos);
 */
//Arreglo de una lista de super 
//Imprimir la lista del super
/* 
1. Manzana
2. Papas
3. Jabon
4. Papel de banio

total de prductos
prompt GUARDAR LA LITA QUE TE DA EL USUARIO DENTRO DE UN ARREGLO\
 */


let carrito = [];
let indice = 0;

carrito.push("Manzana");
carrito.push("Papas");
carrito.push("Jabon");
carrito.push("Jabon"); 

console.log(carrito);

console.log("1.", carrito[0]);
console.log("2.", carrito[1]);
console.log("3.", carrito[2]);
console.log("4.", carrito[3]);

console.log("Total de productos:", carrito.length);

let listaDeSuper = ['Manzana', 'Servilletas', 'Jabon', 'Aguacate', 'Tortillas'];

for (let i = 0; i < listaDeSuper.length; i++){
    console.log((i+1) + " - " + listaDeSuper[i]);
}
console.log("Total de productos:", listaDeSuper.length)





