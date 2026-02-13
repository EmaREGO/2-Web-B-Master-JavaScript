/* 
Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.
*/

/* 
Para la solución del problema se nos pide declarar una funcion agregarLibro con el parámetro titulo,
en esa función llamo a librosLeidos y hago un push en la lista con el título del libro.
librosleidos la declaré en un scope global
*/
let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

/* 
mostrarlibrosLeidos fue otra función que declaré en la cual imprimo en consola "Libros leídos"
y despliego en forma de lista los libros
*/

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let libro of librosLeidos) {
        console.log("- " + libro);
    }
}
/* 
Al final solo llamo las funciones y agrego el nombre del libro para al final llamar la función
mostrarLibrosLeidos
*/
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
agregarLibro("Cómo ganar amigos e influir en ellos");
agregarLibro("Hacking Ético");
agregarLibro("GESTAFO");
mostrarLibrosLeidos();

/* SALIDA DE CONSOLA
[Running] node "c:\Users\resen\Desktop\js\mostrarLibros"
Libros leídos:
- Cien años de soledad
- El principito
- Cómo ganar amigos e influir en ellos
- Hacking Ético
- GESTAFO
*/