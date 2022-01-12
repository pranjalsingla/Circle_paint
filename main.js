canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color="red";
width=1;

var last_x, last_y;
var mouse_event="empty";

canvas.addEventListener("mousedown",click);
function click(e){
    mouse_event="mouseDown"
};

canvas.addEventListener("mousemove",move);
function move(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouse_event="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x, last_y);
        console.log("last X position="+last_x,"last Y position="+ last_y);
        ctx.arc(current_x,current_y,5,0,2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouse_event="mouseUP";
}

canvas.addEventListener("mouseleave",mouse_leave );
function mouse_leave(e){
    mouse_event="mouseleave";
}
