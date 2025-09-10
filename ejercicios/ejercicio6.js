// seleccion  de elementos
const caja = document.getElementById("caja");
const btnAgregar = document.getElementById("btnAgregar");
const btnQuitar = document.getElementById("btnQuitar");
const btnToggle = document.getElementById("btnToggle");

// agregar la clase
btnAgregar.addEventListener("click", () => {
  caja.classList.add("resaltado");
});

// quitar la clase
btnQuitar.addEventListener("click", () => {
  caja.classList.remove("resaltado");
});

// cambiar la clase (si la tiene la quita, si no la agrega)
btnToggle.addEventListener("click", () => {
  caja.classList.toggle("resaltado");
});
