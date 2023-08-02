/*
    Programa una función que te devuelva el texto recortado según el número de caracteres indicados, Ej. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const clippedText = (text="", longitud=undefined) => (!text)
    ?console.warn("No ingresaste niguna cadena")
    :console.info(text.slice(0,longitud));
    

clippedText("Hola Mundo", 4);
clippedText("Hola Mundo", 1);
clippedText("Hola Mundo", 7);