


/*onst input  = document.getElementById("nuevaTarea");
const boton  = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

boton.addEventListener("click",function(){
    const texto = input.value.trim();
    if (texto === "") return;

    const li =document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);

    input.value="";
});*/

// ---------- Lista 1 ----------
const input = document.getElementById("nuevaTarea");
const boton = document.getElementById("btnAgregar");
const botonBorrarTodo = document.getElementById("btnBorrar");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto + " ";

    const botonBorrar = document.createElement("button");
    botonBorrar.textContent = "Borrar";
    botonBorrar.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(botonBorrar);
    lista.appendChild(li);

    input.value = "";
});

botonBorrarTodo.addEventListener("click", function () {
    lista.replaceChildren();
});

// ---------- Lista 2 ----------
const input2 = document.getElementById("segundaTarea");
const boton2 = document.getElementById("btnAgregar2");
const botonBorrarTodo2 = document.getElementById("btnBorrar2");
const lista2 = document.getElementById("lista2");

boton2.addEventListener("click", function () {
    const texto2 = input2.value.trim();
    if (texto2 === "") return;

    const li2 = document.createElement("li");
    li2.textContent = texto2 + " ";

    const botonBorrar2 = document.createElement("button");
    botonBorrar2.textContent = "Borrar";
    botonBorrar2.addEventListener("click", function () {
        li2.remove();
    });

    li2.appendChild(botonBorrar2);
    lista2.appendChild(li2);

    input2.value = "";
});

botonBorrarTodo2.addEventListener("click", function () {
    lista2.replaceChildren();
});