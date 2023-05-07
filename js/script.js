document.addEventListener("DOMContentLoaded", function () {
    // Mostrem el missatge de benvinguda
    let boto = document.createElement("button");
    boto.innerText = "Clica aquí";
    boto.addEventListener("click", function () {
      alert("Benvingut a la nostra pàgina web GymCat!");
    });
  
    let container = document.getElementById("boto-container");
    if (container) {
      container.appendChild(boto);
    }
  
    // Carreguem les classes del fitxer XML
    if (document.querySelector(".info-container")) {
      fetch("XML/classes.xml")
        .then((response) => response.text())
        .then((xmlText) => {
          let parser = new DOMParser();
          let xmlDoc = parser.parseFromString(xmlText, "text/xml");
          let classes = xmlDoc.querySelectorAll("class");
  
          let classesContainer = document.querySelector(".info-container");
          classesContainer.innerHTML = "";
  
          classes.forEach((classElement) => {
            let classDiv = document.createElement("div");
            classDiv.classList.add("class");
  
            let name = classElement.querySelector("name").textContent;
            let description = classElement.querySelector("description").textContent;
            let image = classElement.querySelector("image").textContent;
  
            classDiv.innerHTML = `
              <h2>${name}</h2>
              <img src="${image}" alt="Classe de ${name}">
              <p>${description}</p>
            `;
  
            classesContainer.appendChild(classDiv);
          });
        })
        .catch((error) => console.error("Error carregant les dades de les classes:", error));
    }
  });