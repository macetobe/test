
//var message=document.getElementById("message");

/*function show(){
	message.className="present";
}*/

//setTimeout(show,3000);




















/*var color=document.getElementById("color-change");
var multi=["yellow","grey","green","brown"];
var count=0;
//var click=document.getElementsbyClassName("aa");

function colo(){
   color.style.background=multi[count];
   count++;

   if(count==multi.length){
   	count=0;
   }
}

var start=setInterval(colo,3000);

color.onclick= function (){

clearTimeout(start);
color.innerHTML="stoped";

};*/

//click.onclick=colo;





/*window.onload=events


function events() {

var content=document.getElementById("content");
var button=document.getElementById("show-more");

button.onclick=function(){
  if (content.className=="open"){
   content.className=""
   button.innerHTML="show-more"
  }else{
      content.className="open"
      button.innerHTML="show-less"
  }


}

}

*/





















/*function message() {
	document.getElementById("message1").innerHTML="load this message";
};*/





//window.onload=init;


//window.onload=init;



/*function init(){
	for(var i=0;i<document.images.length;i++){
		if(document.images[i].parentNode.tagName=="a"){
			rollover(document.images[i]);
		}
	}
}

function rollover(image){
  image.outImage=new image();
  image.outImage.src=imaeg.src;
  image.onmouseout=rollout;

  image.overImage= new Image();
  image.overImage.src="images/"+image.id+"jpg";
  image.onmouseover=rollover;
}

function rollout() {
  this.src=	this.outImage.src;

};

function rollover(){
	this.src=this.overImage.src;
}*/



/*function init(){
	for(var p=0; p<8; p++)
		{
		var Newnum=Math.floor(Math.random()* 40)+1;
		document.getElementById("square"+p).innerHTML=Newnum; 
       
	}
};
 */









/*function init(){
	document.getElementById("try").onclick=clickin;
}

function clickin(){

        var ans=prompt("enter your number")	
	try{
		if(!ans || isNaN(ans) || ans<0){
			throw new Error("not a valid number")
		}
		        
		alert(`the square root of ${ans} is ${Math.sqrt(ans)}`)

	}
	catch (errMsg) {
		alert(errMsg.message)
	}
}*/
	
