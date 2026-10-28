const input  = document.getElementById("nuevaTarea");
const boton  = document.getElementById("btnAgregar");
const lista = document.getElementByI("lista");

boton.addEventListener("click",function(){
    const texto = input.value.trim();
    if (texto === "") return;

    const li =document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);

    input.value="";
});