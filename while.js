let contador = 10;

while ( contador > 0) {
    console.log(contador);
    contador --;
};

console.log("______________");

for (let i = 0; i < 10; i++ ){
    console.log(i);
};

console.log("______________");
let suma = 0;

for (let i = 1; i <= 10; i++) {
    suma += i; 

}
console.log(suma); 

console.log("___________");

let frutas = ['manzana', 'naranja', 'plátano', 'kiwi'];

console.log(frutas[1]);

frutas[2] = 'Coco'; 

console.log(frutas);

//Puedes acceder a los elementos de un array directamente mediante su índice:

console.log(frutas[0]); // Salida: "manzana"

console.log(frutas[2]); // Salida: "plátano"

//Puedes modificar un elemento de un array asignando un nuevo valor a un índice específico:

frutas[1] = 'pera'; 

// Ahora el array es ['manzana', 'pera', 'plátano', 'kiwi']
//Hay varias formas de añadir elementos a un array. La más común es usar el método push(), que añade un elemento al final del array:

frutas.push('kiwi');

console.log(frutas); 

// Imprime: ['manzana', 'pera', 'naranja', 'kiwi']
//También puedes usar unshift() para añadir un elemento al principio:

frutas.unshift('cereza');

console.log(frutas); 

// Imprime: ['cereza', 'manzana', 'pera', 'naranja', 'kiwi']
//Para eliminar un elemento del final del array, utilizamos pop():

frutas.pop();

console.log(frutas); 

// Imprime: ['cereza', 'manzana', 'pera', 'naranja']
// Si quieres eliminar el primer elemento, puedes usar shift():

frutas.shift();

console.log(frutas); 

// Imprime: ['manzana', 'pera', 'naranja']
//La propiedad length de un array devuelve la cantidad total de elementos en él, lo cual es útil para determinar el último índice válido:

console.log(frutas.length); // Salida: 3

console.log(frutas[frutas.length - 1]); // Salida: "'naranja'"
//Esto es útil para iterar a través de los elementos del array.

//Puedes usar un bucle for para recorrer un array:

for (let i = 0; i < frutas.length; i++) {

    console.log(frutas[i]); // Imprime cada fruta

}
//
