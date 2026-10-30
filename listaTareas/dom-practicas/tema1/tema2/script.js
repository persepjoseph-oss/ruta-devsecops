function fecha(){
    let hoy = new Date();
    
    let diaActual =hoy.getDate();
    let mesActual =hoy.getMonth();
    let añoActual = hoy.getFullYear();
    
    alert(" Hoy es : " +diaActual + "/" +mesActual + "/"+añoActual);
}
const enlace1 = document.getElementById("enlace");
enlace1.addEventListener("click",function(evento){
    evento.preventDefault();
    fecha();
})