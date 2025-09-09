// Selección de un elemento de referencia
const item2 = document.getElementById("item2");
const resultado = document.getElementById("resultado");

// 1. parentElement → acceder al padre de item2
const padre = item2.parentElement; // <ul id="lista">

// 2. children → acceder a los hijos del padre (ul)
const hijos = padre.children; // colección de <li>

// 3. nextElementSibling → acceder al siguiente hermano de item2
const siguiente = item2.nextElementSibling; // <li id="item3">

// Mostrar resultados en la página
resultado.innerHTML = `
  <p><strong>Elemento actual:</strong> ${item2.textContent}</p>
  <p><strong>Padre (parentElement):</strong> ${padre.tagName} con id="${padre.id}"</p>
  <p><strong>Hijos (children):</strong> ${[...hijos].map(hijo => hijo.textContent).join(", ")}</p>
  <p><strong>Siguiente hermano (nextElementSibling):</strong> ${siguiente.textContent}</p>
`;
