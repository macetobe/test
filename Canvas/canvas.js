var canvas=document.querySelector('canvas');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c=canvas.getContext('2d');

/*c.fillStyle="rgba(255,0,0.5)";
c.fillRect(300,200,100,100);
c.fillStyle="green";
c.fillRect(100,300,100,100);
c.fillStyle="yellow";
c.fillRect(600,150,100,100);
c.fillStyle="purple";
c.fillRect(800,150,100,100);
console.log(canvas);
 
for (var p=0;p<10;p++){
	var a=Math.random()* window.innerWidth;
	var b=Math.random()* window.innerheigth;
	c.beginPath();
	c.fillRect(a,b,100,100);
    
}*/

/*c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);

c.strokeStyle="grey";
c.stroke();
*/
/*for(var i=0;i<15;i++){
	var x=Math.random()* window.innerWidth;
	var y=Math.random()* window.innerHeight;
	c.beginPath();
c.arc(x,y,30,0, Math.PI*2,false);
c.strokeStyle="blue";
c.stroke();
};
c.beginPath();
c.arc(200,200,30,0, Math.PI*2,false);
c.strokeStyle="blue";
c.stroke();*/
/*var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=(Math.random()-0.5)*8;
var dy=(Math.random()-0.5)*8;
var radius=30;*/

 /*function Circle(x,y,dx,dy,radius){
		this.x=x;
		this.y=y;
		this.dx=dx;
		this.dy=dy;
		this.radius=radius;

		this.draw= function(){
			c.beginPath();
			c.arc(this.x,this.y,this.radius,0, Math.PI*2,false);
			c.strokeStyle="blue";
			c.stroke();
		}
		this.update= function(){
			if(this.x+this.radius>innerWidth||this.x-this.radius<0){
				this.dx=-this.dx;
			}
			if (this.y+this.radius>innerHeight||this.y-this.radius<0){
				this.dy=-this.dy
			}
			this.x+=this.dx;
			this.y+=this.dy
			
			this.draw();
		}
	}
		var circle= new Circle();
	
	 var circleArray=[];

for(var i=0;i<50;i++){
	var x=Math.random()*innerWidth;
	var y=Math.random()*innerHeight;
	var dx=(Math.random()-0.5)*8;
	var dy=(Math.random()-0.5)*8;
	var radius=30;
	circleArray.push(new Circle(x,y,dx,dy,radius));
 //var circle=new Circle(200,200,3,3,30);
}
 //circle.update();
 console.log(circleArray);


function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

	for(var i=0;i<circleArray.length;i++){
           circleArray[15].draw;
	}
   //console.log("booze")
  // circle.update();
	/*c.beginPath();
	c.arc(x,y,radius,0, Math.PI*2,false);
	c.strokeStyle="blue";
	c.stroke();*/
   /*if(x+radius>innerWidth||x-radius<0){
	   dx=-dx;
   }
   if (y+radius>innerHeight||y-radius<0){
	   dy=-dy
   }
   x+=dx;
   y+=dy*
}*/

function Circle(x,y,dx,dy,radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	
     this.draw= function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
		c.strokeStyle="blue";
		c.stroke();
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
	 }	
	}
 var Array=[];

   for(var i=0;i<100;i++){
var radius=30 
var x=Math.random()* (innerWidth-radius*2)+radius;
var y=Math.random()*(innerHeight-radius*2)+radius;
var dx=(Math.random()-0.5);
var dy=(Math.random()-0.5);
;
	   Array.push(new Circle(x,y,dx,dy,radius));
   }//circle.draw();
console.log(Array);

function animate(){
requestAnimationFrame(animate);
c.clearRect(0,0,innerWidth,innerHeight);
 
for(var i=0;i<Array.length;i++){
    Array[i].update();
}

};
animate();