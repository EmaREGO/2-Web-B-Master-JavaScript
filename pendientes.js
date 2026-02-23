const actividad = document.getElementById("actividad");
const prioridad = document.getElementById("prioridad");
const agregar = document.getElementById("btn-agregar");
const lista = document.getElementById("list-secctions");

agregar.addEventListener("click", (e) => {
    e.preventDefault();
    const actividadValue = actividad.value.trim();
    const prioridadValue = prioridad.value;

    if (actividadValue === "") {
        alert("Por favor, ingresa una actividad.");
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = actividadValue;    

    actividad.value = "";
    prioridad.value = "opcUrgentes";
    let btnBorrar = document.createElement('button');
    btnBorrar.textContent = ('Eliminar');
    listItem.appendChild(btnBorrar);

    if (prioridadValue === "opcUrgentes"){
        const cajaUrgente = document.getElementById("cajaUrgentes");
        cajaUrgente.appendChild(listItem);
        
    } else if (prioridadValue === "opcImportantes"){
        const cajaImportantes = document.getElementById("cajaImportantes");
        cajaImportantes.appendChild(listItem);
        
    } else if (prioridadValue === "opcParaDespues"){
        const cajaParaDespues = document.getElementById("cajaParaDespues");
        cajaParaDespues.appendChild(listItem);
        
    } else if (prioridadValue === "opcSiguienteSemana"){
        const cajaSiguienteSemana = document.getElementById("cajaSiguienteSemana");
        cajaSiguienteSemana.appendChild(listItem);
        
    }

    btnBorrar.addEventListener("click", (e) => {
        listItem.remove();
        e.preventDefault();
    });
});