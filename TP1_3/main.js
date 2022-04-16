"use strict";

let cuad = document.getElementById("myCanvas");
let ctx = cuad.getContext("2d");
let maxWidth = cuad.width;
let maxHeight = cuad.height;
let imageData = ctx.createImageData(maxWidth, maxHeight);

let r = 0;
let g = 0;
let b = 0;
let a = 255;



function drawRect(imageData, r, g, b, a) {


    for (let y = 0; y < maxHeight; y++) {
        let coeficiente = 255 / (cuad.height);
        r = coeficiente * y
        g = coeficiente * y;
        b = coeficiente * y;
        for (let x = 0; x < maxWidth; x++) {
            setPixel(imageData, x, y, r, g, b, a);
            console.log(x, y);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a) {
    let index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
    console.log("estoy pintando");
}
drawRect(imageData, r, g, b, a);
ctx.putImageData(imageData, 0, 0); //genera la imagen a partir de las coordenadas 0,0 del canvas