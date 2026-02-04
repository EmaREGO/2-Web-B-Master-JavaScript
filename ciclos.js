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
console.log('Yeih, saliste'); */

let frutas = ['Manzana', 'Pera', 'Lulo', 'Cereza', 'Mango', 'Papaya'];

console.log(frutas[3]);
console.log(frutas[2]);
console.log(frutas[0]);

console.log(frutas.length);
//Leght empieza desde 1
for (let indice = 0; indice < frutas.length; indice++){
    console.log("Fruta = ", frutas[indice])
}
