"use strict"
let canvas = document.querySelector("#myCanvas");
let ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d"));
ctx.fillStyle = "RGBA(220,255,150,1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);