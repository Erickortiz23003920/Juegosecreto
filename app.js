/*let titulo = document.querySelector("h1");

titulo.innerHTML = "Juego del numero secreto";

let parrafo = document.querySelector("p");

parrafo.innerHTML = "Indica un numero del 1 al 10";*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

//cuando yo utilizo una funcion puedo darle el nombre que quiera a los parametros que voy a usar.
function asignarElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarNumeroUsuario() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
 
    if (numeroSecreto === numeroUsuario) {
        asignarElemento("p", `Has acertado el numero secreto en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //sino acierta.
        if (numeroUsuario > numeroSecreto) {
            asignarElemento("p", "El numero secreto es menor");
        } else{
            asignarElemento("p", "El numero secreto es mayor");

            intentos++;
            limpiarCaja();
        }
    }
    return;
};

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarElemento("p", "ya se han sorteado todos los numeros posibles"); 
    } else {
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarElemento("h1", "Juego del numero secreto!");
    asignarElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //reiniciar numero de intentos
    intentos = 1;
    //generar nuevo numero aleatorio
    //deshabilitar boton juego nuevo
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    //reiniciar mensaje de ingresar numero de 1 a 10
    condicionesIniciales();
}

condicionesIniciales();

    