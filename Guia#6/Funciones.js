window.sr = ScrollReveal();
 sr.reveal('#HaH' ,{
  duration: 8000,
  origin: 'right',
  distance:'100px'
 }); 

 window.sr = ScrollReveal();
 sr.reveal('#mitad' ,{
  duration: 5000,
  origin: 'left',
  distance:'100px'
 }); 
function Quitar(){

    document.getElementById("spiderman1").src="Spiderman sin mascara.jpg";
}

function Poner(){

    document.getElementById("spiderman1").src="Spiderman con mascara.jpg";
}

function CambiarRojo(){
    document.getElementById("fondo").style.backgroundColor="Red";
}

function CambiarBlanco(){
    document.getElementById("fondo").style.backgroundColor="White";
}

function agregar(){

    var Lista = document.getElementById("lista");
    var dato = document.getElementById("dato").value 
    var li = document.createElement("li");
    li.textContent= dato;
    Lista.appendChild(li);
    document.getElementById("dato").value=""
}

function eliminar(){
    var Lista = document.getElementById("lista");
    Lista.removeChild(Lista.lastElementChild);
}