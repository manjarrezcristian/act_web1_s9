// Selección de elementos
const imagen = document.getElementById("imagen");
const enlace = document.getElementById("enlace");
const boton = document.getElementById("btnCambiar");
const resultado = document.getElementById("resultado");

// Evento del botón
boton.addEventListener("click", () => {
  // Leer atributos actuales
  const srcActual = imagen.getAttribute("src");
  const hrefActual = enlace.getAttribute("href");

  // Mostrar atributos antes de cambiarlos
  resultado.innerHTML = `
    <p><strong>Antes:</strong></p>
    <p>Imagen SRC: ${srcActual}</p>
    <p>Enlace HREF: ${hrefActual}</p>
  `;

  // Cambiar atributos
  imagen.setAttribute("src", "https://via.placeholder.com/200x100/ff7f7f/ffffff?text=Nueva+Imagen");
  enlace.setAttribute("href", "https://www.wikipedia.org");
  enlace.textContent = "Ir a Wikipedia";

  // Mostrar atributos después del cambio
  resultado.innerHTML += `
    <p><strong>Después:</strong></p>
    <p>Imagen SRC: ${imagen.getAttribute("src")}</p>
    <p>Enlace HREF: ${enlace.getAttribute("href")}</p>
  `;
});
