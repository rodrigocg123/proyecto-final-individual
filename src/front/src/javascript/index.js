$(document).ready(function() {
    function mostrarMensaje() {
        alert("¡Has pulsado el botón!");
    }
    
    function cambiarColor() {
        document.body.style.backgroundColor = "#f0f0f0"; // Cambia el fondo a gris claro
    }
    
    function mostrarTexto() {
        document.getElementById("mensaje").innerText = "¡El botón fue pulsado!";
    }
    
    // Función que ejecutará todas las anteriores
    function ejecutarFunciones() {
        mostrarMensaje();
        cambiarColor();
        mostrarTexto();
    }
    
    // Añadir el evento de clic al botón una vez que la página haya cargado
    window.onload = function() {
        var boton = document.getElementById("Boton1");
        boton.addEventListener("click", ejecutarFunciones);
    };

})


