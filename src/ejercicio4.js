// Selección de elementos
const texto1 = document.getElementById("texto1");
const caja = document.getElementById("caja");
const boton = document.getElementById("btnCambiar");

// Evento para el botón
boton.addEventListener("click", () => {
  // Cambiar texto con textContent
  texto1.textContent = "El texto fue cambiado usando textContent";

  // Cambiar contenido con innerHTML (puede incluir HTML)
  caja.innerHTML = "<strong>Nuevo contenido con innerHTML</strong> <br> <em>Incluye HTML dentro</em>";
});
