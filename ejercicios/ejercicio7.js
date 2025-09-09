// Selección de elementos
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

// Contador para numerar los ítems
let contador = 1;

boton.addEventListener("click", () => {
  // Crear un nuevo elemento <li>
  const nuevoElemento = document.createElement("li");

  // Asignar texto al nuevo elemento
  nuevoElemento.textContent = `Elemento ${contador}`;

  // Agregar el nuevo <li> a la lista <ul>
  lista.appendChild(nuevoElemento);

  // Incrementar el contador
  contador++;
});
