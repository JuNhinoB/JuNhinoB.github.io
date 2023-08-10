/*
let data = [
  "Inteligencia artificial",
  "Programación",
  "Desarrollo web",
  "Ciberseguridad",
  "Redes",
  "Big data",
  "Cloud computing",
  "Internet de las cosas (IoT)",
  "Realidad virtual",
  "Realidad aumentada",
  "Machine learning",
  "Blockchain",
  "Criptomoneda",
  "Automatización",
  "Robótica",
  "Sistemas operativos",
  "Software",
  "Hardware",
  "Dispositivos móviles",
  "Aplicaciones móviles",
  "Algoritmos",
  /* Seguridad informática
    Ingeniería de software
    Base de datos
    Desarrollo de juegos
    UX/UI (Experiencia de Usuario / Interfaz de Usuario)
    Servidores
    Programación orientada a objetos
    Lenguajes de programación
    Front-end
    Back-end
    Redes sociales
    Arquitectura de computadoras
    Virtualización
    Análisis de datos
    Compiladores
    Computación cuántica
    Sistemas embebidos
    Sistemas de gestión de contenido (CMS)
    Seguridad en la nube
    Hacking ético
    Automatización de procesos
    DevOps
    Inteligencia de negocios
    Interacción humano-computadora
    Minería de datos
    API (Interfaz de programación de aplicaciones)
    Bioinformática
    Ingeniería de sistemas
    Redes neuronales 
];

function buscar() {
  let query = document.getElementById("buscar").val

  console.log(query);

  if (query.trim() === "") {
    return;
  }

  let results = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].toLowerCase().includes(query.toLowerCase())) {
      results.push(data[i]);
    }
  }
  document.getElementById("results").innerHTML = "";

  if (results.length > 0) {
    for (let i = 0; i < results.length; i++) {
      let li = document.createElement("li");
      li.textContent = results[i];
      document.getElementById("results").appendChild(li);
    }
  } else {
    let li = document.createElement("li");
    li.textContent = "No se encontartonm elemtos " + query;
    document.getElementById("results").appendChild(li);
  }
} */

// script.js
const searchInput = document.getElementById("buscar");
const resultsList = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  resultsList.innerHTML = "";

  if (searchTerm.length > 0) {
    // Aquí podrías hacer una llamada a una API o procesar tus datos
    // para obtener los resultados y luego agregarlos a 'resultsList'
    // como elementos <li>.
    // Por ahora, agregaremos algunos resultados de ejemplo.

    const exampleResults = [
      "seguridad",
      "what",
      "lista",
      "Inteligencia artificial",
      "Programación",
      "Desarrollo web",
      "Ciberseguridad",
      "Redes",
      "Big data",
      "Cloud computing",
      "Realidad virtual",
      "Realidad aumentada",
      "Machine learning",
      "Blockchain",
      "Criptomoneda",
      "Automatización",
      "Robótica",
      "Sistemas operativos",
      "Software",
      "Hardware",
      "Dispositivos móviles",
      "Aplicaciones móviles",
      "Algoritmos",
    ];

    exampleResults.forEach((result) => {
      if (result.toLowerCase().includes(searchTerm)) {
        const li = document.createElement("li");
        li.textContent = result;
        resultsList.appendChild(li);
      }
    });

    resultsList.style.display = "block";
  } else {
    resultsList.style.display = "none";
  }
});
