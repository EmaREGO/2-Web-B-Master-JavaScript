/* 
Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan 
escribir y agregar comentarios que se muestran en la página. 
Este proyecto ayudará a los estudiantes a manejar eventos de formularios 
y modificar el contenido de una página.
*/
const formulario = document.getElementById("formulario");
const input = document.getElementById("iComentario");
const cajaComentario = document.getElementById("cajaComentario");

formulario.addEventListener("submit", (e) => {
    const texto = input.value;
    const fecha = new Date().toLocaleString()

    e.preventDefault();
    

    let nuevoComentario = document.createElement('p'); //Lógica para agregar nuevo comentario
    let btnBorrar = document.createElement('button');
    btnBorrar.textContent = ('Eliminar');
    nuevoComentario.textContent = texto + " " +fecha; //Agregar date comentario
    cajaComentario.appendChild(nuevoComentario);
    nuevoComentario.appendChild(btnBorrar);
    input.value = ("");

    btnBorrar.addEventListener("click", (e) => { //Lógica para eliminar comentario 
        nuevoComentario.remove();
        e.preventDefault();
    });
    
});




