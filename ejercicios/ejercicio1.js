// ejercicio1.js

// seleccionamos el div
const infoDiv = document.getElementById("info");

// obtenemos la información del documento
const titulo = document.title;
const url = document.URL;

// mostramos en el div
infoDiv.innerHTML = `
  <p><strong>Título:</strong> ${titulo}</p>
  <p><strong>URL:</strong> ${url}</p>
`;
