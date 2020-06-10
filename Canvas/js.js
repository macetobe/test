var c=document.querySelector('canvas');
c.width=window.innerWidth;
c.height=innerHeight;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var button = document.getElementById("refresh");

var refresh = function() {

ctx.clearRect(0,0,400,400);
for(i=0; i<600; i++) {

var x = Math.floor(Math.random()*300);
var y = Math.floor(Math.random()*300);
var radius = Math.floor(Math.random()*20);

var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
  
ctx.beginPath();
ctx.arc(x,y,radius,Math.PI*2,0,false);
ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
ctx.fill();
ctx.closePath();
  
}
}

refresh();
button.addEventListener("click", refresh, false);