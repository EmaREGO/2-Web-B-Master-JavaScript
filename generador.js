//Objetivo
//El objetivo es crear un sitio que nos permita generar una contraseña segura, basado en el proyecto de frontend mentor:
const controlRangeCharacter = document.getElementById("rangeCharacterLength");
const showCharacterLength = document.getElementById("characterLength");
const btnGenerateP = document.getElementById("btnGenerateP");
const passwordGenerated = document.getElementById("passwordGenerated");
// Definir checkbox
const upperCaseChk = document.getElementById("uppercaseLetters");
const lowerCaseChk = document.getElementById("lowercaseLetters");
const numberChk = document.getElementById("incNumbers");
const symbolChk = document.getElementById("incSymbols");
//Botón copiar
const btnCopiarPassword = document.getElementById("btnCopiar");
const strengthLevel = document.getElementById("strengthLevel");

controlRangeCharacter.addEventListener("input", () =>{
    showCharacterLength.textContent = controlRangeCharacter.value;
});

btnGenerateP.addEventListener("click", () => {
    let caracteresPermitidos = "";
    let password = "";
    
    const opciones = [
    { casilla: upperCaseChk, letras: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { casilla: lowerCaseChk, letras: "abcdefghijklmnopqrstuvwxyz" },
    { casilla: numberChk, letras: "0123456789" },
    { casilla: symbolChk, letras: "!@#$%^&*()" }
    ];

    for (let opcionActual of opciones) {
        if ( opcionActual.casilla.checked === true) {
            caracteresPermitidos += opcionActual.letras;
        }
}

    if(caracteresPermitidos === "") {
        alert("Por favor. Seleccione una casilla");
        return;
    } else {
            for (let i = 0; i < controlRangeCharacter.value; i++) {
        let indiceAleatorio = Math.floor(caracteresPermitidos.length * Math.random());
        password += caracteresPermitidos[indiceAleatorio];
        }
    }
    passwordGenerated.value = password;
    calcularFuerza(); //LLamar la funcion para evaluar la fuerz
});

     //Botón de copiar password
btnCopiarPassword.addEventListener("click", () => {
navigator.clipboard.writeText(passwordGenerated.value);
alert("¡Contraseña copiada!"); 
});
    
//  Sistema de puntos
function calcularFuerza() {
    let puntuacion = 0;

    if (upperCaseChk.checked === true) {
        puntuacion += 1;
    }
    if (lowerCaseChk.checked === true) {
        puntuacion += 1;
    }
    if (numberChk.checked === true) {
        puntuacion += 2;
    }
    if (symbolChk.checked === true) {
        puntuacion += 2;
    }
    if (controlRangeCharacter.value > 8) {
        puntuacion += 1
    }
    if (controlRangeCharacter.value < 8 && controlRangeCharacter.value > 10) {
        puntuacion += 2
    }
    if (controlRangeCharacter.value >= 10) {
        puntuacion += 3
    }
    if (puntuacion < 5) {
        strengthLevel.innerHTML = '<div class="caja rojo"></div><div class="caja"></div><div class="caja"></div>';
    } else if (puntuacion >= 5 && puntuacion < 7 ){
        strengthLevel.innerHTML = '<div class="caja amarillo"></div><div class="caja amarillo"></div><div class="caja"></div>';
    } else {
        strengthLevel.innerHTML = '<div class="caja verde"></div><div class="caja verde"></div><div class="caja verde"></div>';
    } //Botones para el nivel de fuerza del password
}

