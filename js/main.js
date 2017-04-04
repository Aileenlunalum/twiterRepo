var contadorCAracter= document.getElementById("contadorCAracter");
var contenedorTwiter=document.getElementById("contenedorTwiter");
var autor=document.getElementById("autor");
contenedorTwiter.addEventListener("keydown", contador);
contenedorTwiter.addEventListener("KeyUp", contador);

function contador(){
  if(document.forms[0].caracteres.value<140){
    document.forms[0].caracteres.value=document.forms[0].texto.value.length

    if(138==document.forms[0].caracteres.value){
     alert("estas apunto de llegar al limite de caracteres definidos si deseas borrar algo estas a tiempo");
     alert("de lo contrario continua escribiendo al terminar presiona twitear")
     }
   }
  else{
    contenedorTwiter.disabled = true;
  }
}
var j=0;
function crear(){
  j+=1;
   var seccion =document.createElement("section");
    seccion.id="seccion"+j.toString();
    granPadre.appendChild(seccion);
   var h1=document.createElement("h1");
    h1.id="h1"+j.toString();
    h1.innerHTML= autor.value+"  " +"twiter :";
    seccion.appendChild(h1);
   var h3=document.createElement("h3");
    h3.id="h3"+j.toString();
    h3.innerHTML=".*.*"+contenedorTwiter.value+"*.*.";
    seccion.appendChild(h3);
  contenedorTwiter.value = "";
}
