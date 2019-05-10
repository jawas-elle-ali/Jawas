<!--jQuery Stuff-->
window.addEventListener('load', function () {
    //    select  the canvas element
    var canvas = document.getElementById('canvas');
    //    define  in type of context we're working in  with this canvas
    var  context = canvas.getContext('2d');

    //    resizing canvas size
    canvas.height = window.innerHeight;
    canvas.width =window.innerWidth;
    //    variables
    var painting = false;

    // logic :when pressing down or not, when draw or not?

    function startPosition(e){//when clicked, turn true to start painting
        painting = true;
        draw(e);// so that when clicked can create point/dots instead of having to drag
    }
    function endPosition(){//when clicked, turn false end painting
        painting = false;
        context.beginPath();   //   resets the new starting position to draw

    }
    function draw(e){//when clicked, turn false end painting
        //    check if we're drawing or not
        if (!painting){return}
        //    set styles to drawing tool
        context.strokeStyle = 'green'; //color
        context.lineWidth =10; //thickness
        context.lineCap ='round'; // type of line is rounded
        context.lineTo(e.clientX, e.clientY);    //    draw the line to go where the mouse position is
        context.stroke();//makes the the lines visible

        //    Creates a smoother line than a pixelated one
        context.beginPath();
        context.moveTo(e.clientX, e.clientY); //starts the drawing from the new position of the mouse
    }

    //    eventListeners
    canvas.addEventListener('mousedown',startPosition );
    canvas.addEventListener('mouseup',endPosition );
    canvas.addEventListener('mousemove',draw );

});
