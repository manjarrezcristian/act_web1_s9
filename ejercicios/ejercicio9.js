// Selección del formulario y elementos
const formulario = document.getElementById("miFormulario");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

// Manejar el evento de envío
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita que la página se recargue

  // Obtener valores de los inputs
  const valorNombre = nombre.value.trim();
  const valorEmail = email.value.trim();

  // Validación simple
  if (valorNombre === "" || valorEmail === "") {
    mensaje.textContent = "⚠️ Por favor completa todos los campos.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = `✅ ¡Formulario enviado con éxito! Bienvenido, ${valorNombre}.`;
    mensaje.style.color = "green";

    // Opcional: limpiar los campos
    formulario.reset();
  }
});
