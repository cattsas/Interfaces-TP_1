"use strict";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let width = 500;
let height = 500;
let imageData = ctx.createImageData(width, height);

let r = 0;
let g = 0;
let b = 0;
let a = 255;

function drawRect(imageData, r, g, b, a) {
    for (let x = 0; x < width / 2; x++) { //variando el valor de r y g en funcion de x, hago un degrade
        let coeficiente = 255 / (width / 2); //se utiliza esto para que el degradado abarque la mitad del ancho
        r = coeficiente * x;
        g = coeficiente * x;
        b = 0;
        let a = 255;
        for (let y = 0; y < height; y++) {
            setPixel(imageData, x, y, r, g, b, a);
        }
    }

    for (let x = width / 2; x < width; x++) { //variando el valor de r y g en funcion de x, hago un degrade
        let coeficiente = 255 / (width / 2); //se utiliza esto para que el degradado abarque la mitad del ancho
        r = 255;
        g = coeficiente * (width - x);
        b = 0;
        let a = 255;
        for (let y = 0; y < height; y++) {
            setPixel(imageData, x, y, r, g, b, a);
        }
    }


}



function setPixel(imageData, x, y, r, g, b, a) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}
drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0); //genera la imagen a partir de las coordenadas 0,0 del canvas