document.addEventListener("DOMContentLoaded", function () {
    console.log("Página del Carnaval cargada correctamente.");
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        message.style.display = "block";
        form.reset();
        setTimeout(() => {
            message.style.display = "none";
        }, 3000);
    });
});
