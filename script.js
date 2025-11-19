// Ejecutar todo cuando el documento está listo
document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------
       NAVEGACIÓN SUAVE
    --------------------------- */
    const enlaces = document.querySelectorAll('nav a');

    enlaces.forEach(e => {
        e.addEventListener('click', function(event) {
            const destino = this.getAttribute('href');
            if (destino.startsWith("#")) {
                event.preventDefault();
                const target = document.querySelector(destino);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", inline: "start" });
                }
            }
        });
    });


    /* --------------------------
       BOTÓN "ENTRAR"
    --------------------------- */
    const btnEntrar = document.getElementById("entrar-btn");
    if (btnEntrar) {
        btnEntrar.addEventListener("click", () => {
            const guardas = document.getElementById("Guardas");
            if (guardas) {
                guardas.scrollIntoView({ behavior: "smooth", inline: "start" });
            }
        });
    }


    /* --------------------------
       BOTÓN FLECHA DE GUARDAS
    --------------------------- */
    const btnFlecha = document.getElementById("flecha-btn");
    if (btnFlecha) {
        btnFlecha.addEventListener("click", () => {
            const capitulos = document.getElementById("Capitulos");
            if (capitulos) {
                capitulos.scrollIntoView({ behavior: "smooth", inline: "start" });
            }
        });
    }


    /* --------------------------
       MOVIMIENTO DEL PASTO
    --------------------------- */

    const pasto = document.querySelector(".pasto-pancho");

    if (pasto) {

        let vientoActivo = false;
        let direccion = 1;
        let posicion = -50; // posición base del pasto (translateX -50%)

        function moverPasto() {
            if (!vientoActivo) return;

            // Movimiento suave derecha ↔ izquierda
            posicion += 0.18 * direccion;

            if (posicion > -47 || posicion < -53) {
                direccion *= -1;
            }

            pasto.style.transform = `translateX(${posicion}%)`;

            requestAnimationFrame(moverPasto);
        }

        pasto.addEventListener("mouseenter", () => {
            vientoActivo = true;
            moverPasto();
        });

        pasto.addEventListener("mouseleave", () => {
            vientoActivo = false;
            pasto.style.transition = "transform 0.4s ease-out";
            pasto.style.transform = "translateX(-50%)";

            setTimeout(() => {
                pasto.style.transition = "";
            }, 400);
        });
    }

});



/* --------------------------
   ANIMACIÓN DE ARBUSTOS
--------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    
    const arbustos = document.querySelectorAll("[class^='arbusto']");

    arbustos.forEach(arbusto => {
        arbusto.addEventListener("mouseenter", () => {
            arbusto.classList.add("sacudiendo");

            arbusto.addEventListener("animationend", () => {
                arbusto.classList.remove("sacudiendo");
            }, { once: true });
        });
    });

});
