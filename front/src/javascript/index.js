async function cargarProductos() {
    const response = await fetch('http://localhost:8080/productos');
    const productos = await response.json();
    mostrarProductos(productos);
}

// Mostrar los productos en la página
function mostrarProductos(productos) {
    const listaContenedor = document.getElementById('productos-lista');
    listaContenedor.innerHTML = ''; // Limpiar la lista actual

    productos.forEach(producto => {
        // Crear un contenedor para cada producto
        const productoItem = document.createElement('div');
        productoItem.classList.add('producto-item');

        // Nombre del producto
        const nombre = document.createElement('h4');
        nombre.textContent = producto.nombre;

        // Precio del producto
        const precio = document.createElement('p');
        precio.textContent = `Precio: ${producto.precio} €`;

        // Cantidad disponible
        const cantidad = document.createElement('p');
        cantidad.textContent = `Cantidad disponible: ${producto.cantidad}`;

        // Contenedor para el contador
        const cantidadContenedor = document.createElement('div');
        cantidadContenedor.classList.add('cantidad-container');

        const botonRestar = document.createElement('button');
        botonRestar.textContent = '-';
        botonRestar.onclick = () => actualizarCantidad(producto.id, 'restar');

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.value = 1;
        inputCantidad.min = 1;
        inputCantidad.max = producto.cantidad;

        const botonSumar = document.createElement('button');
        botonSumar.textContent = '+';
        botonSumar.onclick = () => actualizarCantidad(producto.id, 'sumar');

        cantidadContenedor.appendChild(botonRestar);
        cantidadContenedor.appendChild(inputCantidad);
        cantidadContenedor.appendChild(botonSumar);

        // Crear el botón de compra
        const botonCompra = document.createElement('button');
        botonCompra.textContent = 'Comprar';
        botonCompra.disabled = producto.cantidad <= 0;  // Deshabilitar si no hay stock
        botonCompra.onclick = () => comprarProducto(producto.id, inputCantidad);

        // Añadir todos los elementos al contenedor del producto
        productoItem.appendChild(nombre);
        productoItem.appendChild(precio);
        productoItem.appendChild(cantidad);
        productoItem.appendChild(cantidadContenedor);
        productoItem.appendChild(botonCompra);

        // Añadir el producto al contenedor de la lista
        listaContenedor.appendChild(productoItem);
    });
}

// Actualizar la cantidad seleccionada por el usuario
function actualizarCantidad(productoId, accion) {
    const productoItem = document.getElementById(`producto-${productoId}`);
    const inputCantidad = productoItem.querySelector('input');

    let cantidadActual = parseInt(inputCantidad.value);
    if (accion === 'restar' && cantidadActual > 1) {
        inputCantidad.value = cantidadActual - 1;
    } else if (accion === 'sumar' && cantidadActual < inputCantidad.max) {
        inputCantidad.value = cantidadActual + 1;
    }
}

// Función para comprar un producto
async function comprarProducto(id, inputCantidad) {
    const cantidadSeleccionada = parseInt(inputCantidad.value);
    const response = await fetch(`http://localhost:8080/productos/${id}/compra`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cantidad: cantidadSeleccionada }) // Enviar la cantidad seleccionada
    });

    const data = await response.json();
    if (response.ok) {
        alert(data); // Mensaje de compra exitosa
        cargarProductos(); // Actualizar la lista de productos
    } else {
        alert(data); // Mensaje de error (por ejemplo, sin stock)
    }
}

// Cargar productos cuando la página se carga
cargarProductos();
</script>
