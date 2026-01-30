var color = 'morado';
var color1 = 'azul';
var color2 = 'verde';
//Pone la ultima  porque va leyendo de arriba para abajo
//Es un problema porque
console.log(color);
console.log(color1);
console.log(color2);

let mascota = 'perro';
let mascota1 = 'gato';

const numero = 23;

let num1 = 3;
let num2 = 5;

console.log("Operadores matematicos");
let suma = num1 + num2;
let resta = num2 - num1;
let modulo = num1 % num2;
let exponencial = num1 ** num2;

console.log(suma);  //Se  usaria la consola para ver que esta pasando
console.log(15 + 15);
console.log(resta);
console.log(num1*num2);
console.log(num2/num1);
console.log("Modulo de 3 % 5: " + modulo);
console.log(exponencial);


//Comparacion simple retorna valor booleano
console.log(num1 == num2);
console.log(10 == 10);
console.log(12 == '12');

//Comparacion estricta
console.log( 23 === '23');

console.log("__________");
let valor1 = 20;
let valor2 = 30;

//Mayor que
console.log(valor1 > valor2);
//Mayor o igual que
console.log(valor1 >= valor2);
//Menor que
console.log(valor1 < valor2);
//Menor o igual que
console.log(valor1 <= valor2);
//Distinto que
console.log(10 != '10');
//Distinto que Estricto
console.log(10 !== '10');
//Es mas recomendado la comparacion estricta para evitar el tipo de conversion automatica
//Para evitar problemas futuros