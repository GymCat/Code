document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact form");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("El teu missatge ha estat enviat! (Demostració)");
        });
    }
