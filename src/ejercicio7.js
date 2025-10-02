// Selección de elementos
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");

// contador enumerador de elementos
let contador = 1;

boton.addEventListener("click", () => {
  // crear nuevo elemento <li>
  const nuevoElemento = document.createElement("li");

  // asignar texto al nuevo elemento
  nuevoElemento.textContent = `Elemento ${contador}`;

  // agregar el nuevo <li> a la lista <ul>
  lista.appendChild(nuevoElemento);

  // incrementar el contador
  contador++;
});
