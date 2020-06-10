var canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

var mouse={
    x:undefined,
 y:undefined
}

var maxRadius=40;
var minRadius=2;
var colorArray=[
    '#E1C2FF',
    '##71FFF9',
    '#3B4024',
    '#FA3823',
    '#F2F2EF',
    '#FFD045',
    '#06CCC5',
    '#2A06CC'
];
window.addEventListener("mousemove",function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    console.log(mouse)
});

window.addEventListener("resize",function(){
    
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
init();
})

//arc loop
function Circle(x,y,dx,dy,radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
    this.radius=radius;
    this.minRadius=radius;
    this.color=colorArray[Math.floor(Math.random()* colorArray.length)];
	
     this.draw= function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		c.strokeStyle="blue";
        //c.stroke();
        c.fillStyle=this.color;
		c.fill();
	 }
	 this.update= function(){
		if(this.x + this.radius>innerWidth || this.x- this.radius < 0){
			this.dx=-this.dx;
		}
		 if(this.y+ this.radius>innerHeight|| this.y-this.radius < 0 ){
			 this.dy=-this.dy;
		 }
	  
	   this.x+=this.dx;
	   this.y+=this.dy;
       this.draw();
       
       //interactivity
       if(mouse.x- this.x<50 && mouse.x-this.x>-50 && mouse.y-this.y<50&&mouse.y-this.y>-50){
           if(this.radius<maxRadius){
               this.radius+=1;
       }}else if(this.radius>this.minRadius){
           this.radius-=1;
       } 
	 }	
    }

 var Array=[];

   for(var i=0;i<500;i++){
var radius=Math.random()* 3+7;
var x=Math.random()* (innerWidth-radius*2)+radius;
var y=Math.random()*(innerHeight-radius*2)+radius;
var dx=(Math.random()-0.5);
var dy=(Math.random()-0.5);
;
	  Array.push(new Circle(x,y,dx,dy,radius));
   }
   /*function init(){
       Array=[];
   for(var i=0;i<500;i++){
    var radius=Math.random()* 3+7;
    var x=Math.random()* (innerWidth-radius*2)+radius;
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dx=(Math.random()-0.5);
    var dy=(Math.random()-0.5);
    Array.push(new Circle(x,y,dx,dy,radius));
   };
   //circle.draw();
console.log(Array);*/

function animate(){
requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);
 
for(var i=0;i<Array.length;i++){
    Array[i].update();
}

};
//init();
animate();
