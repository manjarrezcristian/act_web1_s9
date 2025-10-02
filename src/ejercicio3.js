// Seleccionar todos los elementos con la clase "resaltado"
const elementos = document.getElementsByClassName("resaltado");

// Cambiar estilo a todos los elementos de la clase
for (let i = 0; i < elementos.length; i++) {
  elementos[i].style.color = "blue";
  elementos[i].style.fontWeight = "bold";
  elementos[i].style.backgroundColor = "lightyellow";
  elementos[i].style.padding = "5px";
}

// Contar cuántos elementos tienen esa clase
const cantidad = elementos.length;

// Mostrar el resultado en el div
document.getElementById("resultado").textContent = 
  `Hay ${cantidad} elementos con la clase "resaltado".`;
