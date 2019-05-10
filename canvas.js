// ctx.fillRect(257, 23, 23 ,23);
// ctx.fillRect(257, 100, 23 ,23);
// ctx.fillRect(23, 100, 23 ,23);



$('#myCanvas').onmousedown(function(e) {
    const canvas = document.getElementById("myCanvas");
    const mouseX = e.pageX - this.offsetLeft;
    const mouseY = e.pageY - this.offsetTop;
    ctx.fillRect(23, 23, 23 ,23);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ff939f";
    paint = true;
    addClick(mouseX, mouseY);
    redraw();
});

$('#myCanvas').mousemove(function(e){
    if(paint){
        addClick(mouseX, mouseY, true);
        redraw();
    }
});

$('#myCanvas').mouseup(function(e){
   paint = false;
});

$('#myCanvas').mouseleave(function(e){
    paint = false;
});

const clickX = new Array();
const clickY = new Array();
const clickDrag = new Array();
var paint;

function addClick(x, y, dragging){
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}

function redraw(){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.strokeStyle = "df4b26";
    context.lineJoin = "round";
    context.linewidth = 5;

    for(var i=0; i < clickX.length; i++){
        context.beginPath();
        if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
        }else{
            context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.stroke();
    }
}
