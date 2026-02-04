/* 
Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).
*/

let listaSuper = [];
let producto = "Inicio";

while (producto !== "") {
    producto = prompt('Ingresa un producto.')

    if (producto !== ""){
        listaSuper.push(producto);
    }
}

for (let indice = 0; indice < listaSuper.length; indice++){
    console.log((indice+1) + ". " + listaSuper[indice]);
}
console.log("Total de la lista: ",listaSuper.length);