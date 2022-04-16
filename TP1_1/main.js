"use strict";

let array = []
let maxHeight = 5;
let maxWidth = 5;
for (let i = 0; i < maxWidth; i++) {
    array[i] = [];
    for (let j = 0; j < maxHeight; j++) {
        array[i][j] = Math.floor(Math.random() * 100);

    }
}

console.log(array);

function maximo() {
    let maximo = 0;
    for (let i = 0; i < maxWidth; i++) {
        for (let j = 0; j < maxHeight; j++) {
            if (array[i][j] > maximo) {
                maximo = array[i][j];
            }
        }
    }
    console.log(maximo);
}

function maximoEnFila(array) {
    let maximo = 0;
    for (let i = 0; i < maxWidth; i++) {
            if (array[i] > maximo) {
                maximo = array[i];
            }
    }
    console.log(maximo);
}

function minimoEnFila(array) {
    let minimo = 0;
    for (let i = 0; i < maxWidth; i++) {
             if (array[i] <= minimo||minimo==0) {
                minimo = array[i];
            }
        }
    console.log(minimo);
}

function maxPar_minImpar(){
    for (let j=0; j<maxHeight;j++){
        if (j%2==0){
            maximoEnFila(array[j]);
        }
        else {
            minimoEnFila(array[j]);
        }
    }

    
}
maxPar_minImpar();
