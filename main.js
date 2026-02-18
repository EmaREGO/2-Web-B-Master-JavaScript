// Paso uno: Seleccionar los elementos que voy a ocupar
let itemInput = document.getElementById('itemInput'); //Cajita
let addItemButton = document.getElementById('addItemButton');
let itemList = document.getElementById('itemList');

//preventdefault evita que se recargue la pagina 
//Paso dos: Las acciones que quiero que haga crear funcion

function addItemButtonClick(){
    //Necesito guardar la informacion que voy trayendo
    let itemText = itemInput.value; //Valor que guarda la cajita

    let newItem = document.createElement('li'); //Le vamos a estar agregando el texto

    //Crear un elemento span
    let textSpan = document.createElement('span');
    textSpan.textContent = itemText; 
    newItem.appendChild(textSpan)

    //Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    
    deleteButton.addEventListener('click', function() {
        newItem.remove(); //No le hemos dicho donde se va a poner
    });

    newItem.appendChild(deleteButton);
    itemList.appendChild(newItem);
    itemInput.value = '';
}

//Agregamos el evento escuchador click y le asignamos nuestra funcion que creamos
addItemButton.addEventListener('click', addItemButtonClick);

