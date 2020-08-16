var canvas;
var context;
var canvas2;
var context2;
var bounds;

document.addEventListener('DOMContentLoaded', function (event) {
    
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    context.canvas.width = window.innerWidth / 2;
    context.canvas.height = window.innerHeight / 2;

    canvas2 = document.getElementById("canvas2");
    context2 = canvas2.getContext("2d");

    context2.canvas.width = context.canvas.width;
    context2.canvas.height = context.canvas.height;

    showAxis();
})

function showAxis() {

    canvas2.addEventListener("mouseenter", function (e) {

        canvas2.addEventListener("mousemove", function (event) {
            bounds = canvas2.getBoundingClientRect();
            currentPos = pointerPos(canvas, event)

            //console.log(bounds.left+","+ bounds.top+","+bounds.right+","+bounds.bottom);
            drawText(currentPos, "30", 50, 50);

        })

    })

}

function pointerPos(canvas, e) {
    var pos = { x: e.clientX - bounds.left, y: e.clientY - bounds.top };
    var coordinates = "x: " + pos.x + ", y: " + pos.y;
    return coordinates;
}

//writes text(a) with dont size(s) at coordiantes (x,y)
function drawText(a, s,  x, y) {
    context2.clearRect(0, 0, window.innerWidth, window.innerHeight)
    context2.font = s+"px Arial";
    currentText = a, x, y;
    context2.fillText(a, x, y);
}

function drawLine() {
    context.moveTo(0, 0);
    context.lineTo(200, 100);
    context.stroke();
}