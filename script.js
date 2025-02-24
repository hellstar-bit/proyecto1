// 1. Cambiar el color de fondo al hacer clic en un botón (si agregas un botón)
document.addEventListener("DOMContentLoaded", function () {
    // Ejemplo: Cambiar el color de fondo al hacer clic en un botón
    const cambiarColorBtn = document.createElement("button");
    cambiarColorBtn.textContent = "Cambiar color de fondo";
    cambiarColorBtn.style.position = "fixed";
    cambiarColorBtn.style.bottom = "20px";
    cambiarColorBtn.style.right = "20px";
    cambiarColorBtn.style.padding = "10px 20px";
    cambiarColorBtn.style.backgroundColor = "#454c4d";
    cambiarColorBtn.style.color = "#fff";
    cambiarColorBtn.style.border = "none";
    cambiarColorBtn.style.borderRadius = "5px";
    cambiarColorBtn.style.cursor = "pointer";
    document.body.appendChild(cambiarColorBtn);

    cambiarColorBtn.addEventListener("click", function () {
        const colores = ["#d7dbdd", "#f0e68c", "#add8e6", "#ffb6c1"];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
    });

    // 2. Mostrar/ocultar información adicional al hacer clic en un enlace
    const acercaDeMiLink = document.querySelector(".listadelheader li:nth-child(5)");
    const informacionAdicional = document.createElement("p");
    informacionAdicional.textContent = "Soy una persona apasionada por la tecnología y el aprendizaje continuo.";
    informacionAdicional.style.display = "none";
    document.querySelector(".acerca").appendChild(informacionAdicional);

    acercaDeMiLink.addEventListener("click", function () {
        if (informacionAdicional.style.display === "none") {
            informacionAdicional.style.display = "block";
        } else {
            informacionAdicional.style.display = "none";
        }
    });

    // 3. Desplazamiento suave al hacer clic en los enlaces del menú
    const enlacesMenu = document.querySelectorAll(".listadelheader li");
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            e.preventDefault();
            const seccionId = this.textContent.toLowerCase().replace(/ /g, "-");
            const seccion = document.querySelector(`.${seccionId}`);
            if (seccion) {
                seccion.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 4. Efecto de hover en la imagen personal
    const imagenPersonal = document.querySelector(".imagen1");
    imagenPersonal.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
    });
    imagenPersonal.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});