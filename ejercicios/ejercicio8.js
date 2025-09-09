// Selección de elementos
const boton = document.getElementById("btnClick");
const caja = document.getElementById("caja");
const mensaje = document.getElementById("mensaje");

// Evento click
boton.addEventListener("click", () => {
  mensaje.textContent = "¡Hiciste clic en el botón!";
  mensaje.style.color = "blue";
});

// Evento mouseover (cuando el mouse entra en la caja)
caja.addEventListener("mouseover", () => {
  caja.style.backgroundColor = "lightgreen";
  caja.textContent = "Mouse dentro 🟢";
});

// Evento mouseout (cuando el mouse sale de la caja)
caja.addEventListener("mouseout", () => {
  caja.style.backgroundColor = "lightgray";
  caja.textContent = "Mouse fuera ⚪";
});
