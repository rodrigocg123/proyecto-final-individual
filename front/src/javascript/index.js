
$(document).ready(function () {

    // Datos de ejemplo para los productos
    const productos = {
        producto1: [
            { id: 1, detalle: "Detalle del Elemento 1 de Producto A" },
            { id: 2, detalle: "Detalle del Elemento 2 de Producto A" },
            { id: 3, detalle: "Detalle del Elemento 3 de Producto A" },
            { id: 4, detalle: "Detalle del Elemento 4 de Producto A" }
        ],
        producto2: [
            { id: 1, detalle: "Detalle del Elemento 1 de Producto B" },
            { id: 2, detalle: "Detalle del Elemento 2 de Producto B" },
            { id: 3, detalle: "Detalle del Elemento 3 de Producto B" },
            { id: 4, detalle: "Detalle del Elemento 4 de Producto B" }
        ],
        producto3: [
            { id: 1, detalle: "PIZZA" },
            { id: 2, detalle: "HAMBURGUESA" },
            { id: 3, detalle: "Detalle del Elemento 3 de Producto C" },
            { id: 4, detalle: "Detalle del Elemento 4 de Producto C" }
        ]
    }

    // Función para actualizar la lista de detalles con el producto seleccionado
    function MostrarMensaje(producto) {
        // Cambiar los detalles de la lista dependiendo del producto seleccionado
        const listaDetalles = productos[producto];
        const listaDetalleElemento = document.getElementById("detalleElemento");

        // Limpiar los detalles anteriores
        listaDetalleElemento.innerHTML = '';

        // Mostrar los nuevos detalles
        listaDetalles.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.detalle;
            listaDetalleElemento.appendChild(li);
        });
    }

    // Función para manejar los clics en los elementos de la lista "Lista de Elementos"
    const listaElementos = document.getElementById("listaElementos");
    listaElementos.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            const itemId = e.target.getAttribute("data-id");
            alert("Has seleccionado el Elemento con ID: " + itemId);
        }
    });
    if (localStorage.getItem('a6e7b565f0fc5f8c') === null) {
        console.log('La clave no existe');
        // O crear la clave si es necesario
        localStorage.setItem('a6e7b565f0fc5f8c', 'valor_inicial');
    } else {
        console.log('La clave existe');
        // Proceder con el valor de la clave
        let valor = localStorage.getItem('a6e7b565f0fc5f8c');
    }
});
