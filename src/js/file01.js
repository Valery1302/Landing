"use strict";

/**
 * Muestra el toast interactivo añadiendo la clase utilitaria `md:block`.
 * Busca un elemento con id `toast-interactive` y, si existe, aplica la clase
 * para hacerlo visible en pantallas medianas en adelante.
**/
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Registra un manejador de clic en el elemento con id `demo` que abre un
 * video de YouTube en una nueva pestaña/ventana. Si el elemento no existe,
 * la función no realiza ninguna acción.
**/

const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};

(() => {
    showToast();
    showVideo();
})();