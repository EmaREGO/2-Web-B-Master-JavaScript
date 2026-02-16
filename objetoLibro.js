/* 
Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
*/

//Creación del objeto libro con titulo, autor, año, estado, capitulos y métodos para descripción del libro, agregar caoítulo y eliminar capítulo
const libro = {
    titulo: "La inteligencia emocional",
    autor: "Daniel Goleman",
    anio: 2018,
    estado: "disponible",
    capitulos: [
        "Primera parte: El cerebro emocional",
        "Segunda parte: La Naturaleza de la Inteligencia Emocional",
        "Tercera parte: Inteligencia Emocional Aplicada",
        "Cuarta parte: Oportunidades",
    ],
    describirLibro() {
        console.log(`Libro titulado -${this.titulo}- escrito por ${this.autor} en el año ${this.anio}, el estado es ${this.estado}. `);
    },
    // ``
    agregarCapitulo(nombreCap) {
        this.capitulos.push(nombreCap);
        console.log(`Capitulo agregado: ${nombreCap}`);
    },

    eliminarCapitulo(capituloEliminar){
        this.capitulos = this.capitulos.filter(capitulos => capitulos !== capituloEliminar);
        console.log(`Capitulo eliminado ${capituloEliminar} correctamente`);
    },

    mostrarCapitulos() {
        this.capitulos.forEach((nombreCap, i) => {
            console.log(`${i + 1 } ${nombreCap}`);    
        })
    }
}

libro.describirLibro();
console.log(libro.capitulos);
libro.mostrarCapitulos();
libro.agregarCapitulo('Quinta parte: Alfabetismo Emocional');
libro.mostrarCapitulos();
libro.eliminarCapitulo('Cuarta parte: Oportunidades');
libro.mostrarCapitulos();


