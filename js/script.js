document.addEventListener("DOMContentLoaded", function() {
    console.log("La web s'ha carregat correctament.");
    
    const images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("load", function() {
            console.log(`La imatge ${this.src} s'ha carregat correctament.`);
        });

        images[i].addEventListener("error", function() {
            console.error(`La imatge ${this.src} no s'ha pogut carregar.`);
        });
    }

    const contactForm = document.querySelector(".contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("El teu missatge ha estat enviat! (Demostració)");
        });
    }
});