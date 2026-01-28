//Este es un comentario de JS

//Tipos de datos

//Number: enteros y decimales


let edad = 24;
let precio = 199.99;

console.log("Tipo de dato Number:");
console.log(edad);
console.log(precio);
//oye, dime el type of de "edad"
console.log(typeof edad);
console.log(typeof precio);

// String (texto) cajita = variable
let nombre = "Ana";
let saludo = "Hola mundo";
console.log("Tipo de dato String:");
console.log(nombre);
console.log(saludo);
console.log(typeof nombre);
console.log(typeof saludo);

//Boolean (verdadero o falso)
let esMayorDeEdad = true;
let tienePermiso = false;
console.log('Tipo de dato Boolean:');
console.log(esMayorDeEdad);
console.log(tienePermiso)
console.log(typeof esMayorDeEdad);


//Undefined (Es variable declarada sin valor)
let telefono;
console.log("Tipo de dato Undefined:");
console.log(telefono);
console.log(typeof telefono);

// Null (valor intencionalmente vacio) NO ES UN OBJETO, SOLO DICE QUE HAY UNA AUSENCIA INTENCIONAL
console.log("Tipo de dato Null:");
let direccion = null;
console.log(direccion);
console.log(typeof direccion);
// Sale Object porque es un error historico que no se corrigio.

//Object (estructura de datos con propiedades)
let persona = {
    nombre: 'Diego',
    edad: '22',
    ciudad: 'CDMX',
};

console.log("Tipo de dato Object:");
console.log(typeof persona);
console.log(persona);

//Nos sirve para saber que es lo que pasa dentro de la web

//symbol (identificador unico)
let id = Symbol('id');
console.log("Tipo de datoo Symbol:");
console.log(id);
console.log(typeof id);