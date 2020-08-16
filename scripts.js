var canvas;
var context;

document.addEventListener('DOMContentLoaded', function (event) {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
})

function showAxis() {
    canvas.addEventListener("mouseenter", function( event ) {   
    console.log("test");
    })
}

function drawLine() {
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
}