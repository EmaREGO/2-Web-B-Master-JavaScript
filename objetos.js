//Un objeto es una coleccion de pares clave = valor (propiedades)
//Cajitas para guardar informacion
const disco = {
    // Propiedades (datos del disco) atributos del objeto
    titulo: "My Beautiful DarK Twisted Fantasy",
    artista: "Kanye West",
    anio: 2010, //Se puede poner sin comillas 
    disponible: true,

    //Propiedad de tipo arreglo
    canciones: ['Devil In A New Dress', 'POWER', 'Runaway', 'Gorgeous' , 'All Of The Lights', 'Monster', 'Hell Of A Life'],

    //Podemos guardar ACCIONES relacionadas con los datos. JSON solo es para almacenar datos

    //Metodo que muestra la informacion
    mostrarInfo() {
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`); //This es todo el contenido de disco
    }, //Se le llama Metodo, se usar para acceder a la informacion
    //This apunta a ESTE objeto (disco)

    //Metodo que liste las canciones
    mostrarCanciones() { //ForEach es una forma de iterar mas eficiente
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1  } ${cancion}`);
        })
    },

    //Agregar una cancion
    agregarCancion(nombre) {
        this.canciones.push(nombre);
        console.log(`Cancion agregada: ${nombre}`)
    },

    //Eliminar cancion
    eliminarCancion(nombre){
    this.canciones = this.canciones.filter(cancion => cancion !== nombre);
    console.log(`Cancion eliminada ${nombre} correctamente`);
    },

    //Cambiar estado de disco a NO disponible
    cambiarDisponible() {
    this.disponible = false;
    }
}
disco.eliminarCancion('POWER');
disco.cambiarDisponible();


//Acceder a los datos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);
//Acceder a los datos con notacion de corchetes
console.log(disco['titulo']);
console.log(disco['disponible']);

//LLamar a nuestro metodo
disco.mostrarInfo();
disco.mostrarCanciones();
//En JAVASCRIPT SI SE PUEDEN INSTANCIAR, SI EXISTEN, La diferencia es que JS no hace de manera rigida como python

disco.agregarCancion('Blame Game');
disco.mostrarCanciones();

//Desestructurar es SACAR cosas de un objetos SIN necesidad de escribir objeto.propiedad
const { canciones } = disco;
const [primera, segunda, tercera] =  canciones;

console.log(primera);
console.log(segunda);
console.log(tercera);

console.log("================")
const { canciones: [pista1, pista2, pista3]} = disco;
console.log(pista1);
console.log(pista2);
console.log(pista3);

//ERROR COMUN: Desestructurar NO crea datos, solo los extra, PARA TEner funciones limpias

//Renombrar variables
const { titulo: nombreDisco, anio: lanzamiento} = disco;
//Se asigna el valor de la propiedad de una variable con otro nombre
console.log(nombreDisco);
console.log(lanzamiento);

const {titulo, artista} = disco;
console.log(titulo);
console.log(artista);