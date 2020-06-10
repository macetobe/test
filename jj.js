var form=document.forms.myform;
var message=document.getElementById("message");

form.onsubmit=function(){
   if(form.text.value==""){
   	  message.innerHTML="please fill the form";
   	  return false;
   }else{
   	    message.innerHTML="";
   	    return true;
   }

}

var tag=document.getElementById("content").getElementsByTagName("p")[4];
var tag2=$("#content p:last-child");


export var bost=8;
