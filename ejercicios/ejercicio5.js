// seleccion de elementos
const imagen = document.getElementById("imagen");
const enlace = document.getElementById("enlace");
const boton = document.getElementById("btnCambiar");
const resultado = document.getElementById("resultado");

// evento del boton
boton.addEventListener("click", () => {
  // Leer atributos actuales
  const srcActual = imagen.getAttribute("src");
  const hrefActual = enlace.getAttribute("href");

  // mostrar atributos antes de cambiarlos
  resultado.innerHTML = `
    <p><strong>Antes:</strong></p>
    <p>Imagen SRC: ${srcActual}</p>
    <p>Enlace HREF: ${hrefActual}</p>
  `;

  // cambiar atributos
  imagen.setAttribute("src", "/assets/imagenes/imagencemex.png");
  enlace.setAttribute("href", "https://www.cemexcolombia.com/");
  enlace.textContent = "Ir a cementos cemex";

  // mostrar atributos despues del cambio
  resultado.innerHTML += `
    <p><strong>Después:</strong></p>
    <p>Imagen SRC: ${imagen.getAttribute("src")}</p>
    <p>Enlace HREF: ${enlace.getAttribute("href")}</p>
  `;
});
