/* *********************************
EJERCICIO 2. CREA EL CONTROLADOR DE LA PÁGINA. DEBERÁ PODER CAMBIAR LA COLUMNA DE LA IZQUIERDA PARA QUE MUESTRE LOS DATOS SOLICITADOS Y EN LA COLUMNA DE LA DERECHA LA IMAGEN QUE CORRESPONDE.
EN CONCRETO, HAY QUE MOSTRAR UNA LISTA DE PRÉSTAMOS Y UNA LISTA DE SOCIOS
************************************ */


// EJERCICIO 2.1 Importar las funciones correspondientes

import { listaPrestamos, imgPrestamos, listaSocios, imgSocios } from "./funciones.js";

// EJERCICIO 2.2 Crear las funciones de control de contenidos
//      * Una función (o dos) que solicitará el listado formateado de préstamos/de socios y el nombre de la imagen correspondiente
//      * Luego colocará el listado en el bloque de la izquierda sustituyendo lo que allí aparezca
//      * Para terminar, colocará la imagen en la columna de la derecha
function listadoPrestamos() {

    const lista = listaPrestamos();
    const texto = document.querySelector("#texto");
    texto.innerHTML = " ";
    texto.appendChild(lista);

    const imagen = imgPrestamos();
    const img = document.querySelector('#img');
    img.src = imagen;

}

function listadoSocios() {

    const lista = listaSocios();
    const texto = document.querySelector("#texto");
    texto.innerHTML = " ";
    texto.appendChild(lista);

    const imagen = imgSocios();
    const img = document.querySelector('#img');
    img.src = imagen;

}

// EJERCICIO 2.3 Enlazar las funciones del módulo main con las funciones del objeto window

window.listadoPrestamos = listadoPrestamos;
window.listadoSocios = listadoSocios;
