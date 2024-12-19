
// Datos de los productos
const productos = {
    productosA: [
        { id: 1, nombre: 'Pollo', detalles: ['Detalle 1.1', 'Detalle 1.2'], cantidad: 0},
        { id: 2, nombre: 'Queso fresco', detalles: ['Detalle 2.1', 'Detalle 2.2'], cantidad: 0 },
        { id: 3, nombre: 'Docena de Huevos', detalles: ['Detalle 3.1', 'Detalle 3.2'], cantidad: 0 },
        { id: 4, nombre: 'Salmon', detalles: ['Detalle 4.1', 'Detalle 4.2'], cantidad: 0 }
    ],
    productosB: [
        { id: 1, nombre: 'Elemento 1', detalles: ['Cantidad', 'Detalle 1.2'] },
        { id: 2, nombre: 'Elemento 2', detalles: ['Cantidad', 'Detalle 2.2'] },
        { id: 3, nombre: 'Elemento 3', detalles: ['Cantidad', 'Detalle 3.2'] },
        { id: 4, nombre: 'Elemento 4', detalles: ['Cantidad', 'Detalle 4.2'] }
    ],
    productosC: [
        { id: 1, nombre: 'Elemento 1', detalles: ['Cantidad', 'Detalle 1.2 '] },
        { id: 2, nombre: 'Elemento 2', detalles: ['Cantidad', 'Detalle 2.2'] },
        { id: 3, nombre: 'Elemento 3', detalles: ['Cantidad', 'Detalle 3.2'] },
        { id: 4, nombre: 'Elemento 4', detalles: ['Cantidad', 'Detalle 4.2'] }
    ]
};

// Mostrar lista de productos
function mostrarLista(tipoProducto) {
    const listaContenedor = document.getElementById(tipoProducto);
    listaContenedor.innerHTML = ''; // Limpiar contenido anterior

    productos[tipoProducto].forEach(producto => {
        // Crear elementos HTML para mostrar cada producto
        const productoItem = document.createElement('div');
        productoItem.classList.add('producto-item');

        const nombre = document.createElement('h4');
        nombre.textContent = producto.nombre;

        // Crear el contador
        const contador = document.createElement('div');
        contador.classList.add('contador');
        const decrementar = document.createElement('button');
        decrementar.textContent = '-';
        decrementar.onclick = () => actualizarCantidad(producto.id, tipoProducto, -1);

        const cantidad = document.createElement('span');
        cantidad.id = `cantidad-${producto.id}`;
        cantidad.textContent = producto.cantidad;

        const incrementar = document.createElement('button');
        incrementar.textContent = '+';
        incrementar.onclick = () => actualizarCantidad(producto.id, tipoProducto, 1);

        // Crear el botón de compra
        const botonCompra = document.createElement('button');
        botonCompra.textContent = 'Comprar';
        botonCompra.disabled = producto.cantidad < 1;
        botonCompra.onclick = () => comprarProducto(producto.id, tipoProducto);

        // Añadir los elementos al contenedor del producto
        contador.appendChild(decrementar);
        contador.appendChild(cantidad);
        contador.appendChild(incrementar);
        productoItem.appendChild(nombre);
        productoItem.appendChild(contador);
        productoItem.appendChild(botonCompra);

        listaContenedor.appendChild(productoItem);
    });
}



// Actualizar la cantidad de un producto
function actualizarCantidad(id, tipoProducto, cambio) {
    const producto = productos[tipoProducto].find(p => p.id === id);
    producto.cantidad += cambio;
    if (producto.cantidad < 0) producto.cantidad = 0; // No permitir cantidad negativa
    document.getElementById(`cantidad-${id}`).textContent = producto.cantidad;
    actualizarBotonCompra(id, tipoProducto);
}

// Activar o desactivar el botón de compra
function actualizarBotonCompra(id, tipoProducto) {
    const producto = productos[tipoProducto].find(p => p.id === id);
    const botonCompra = document.querySelector(`#productos${tipoProducto} button[onclick*='comprarProducto'][data-id='${id}']`);
    if (producto.cantidad < 1) {
        botonCompra.disabled = true;
    } else {
        botonCompra.disabled = false;
    }
}

// Función de compra (puedes modificarla según lo que necesites hacer)
function comprarProducto(id, tipoProducto) {
    const producto = productos[tipoProducto].find(p => p.id === id);
    alert(`Compraste ${producto.nombre} con ${producto.cantidad} unidades.`);
    producto.cantidad = 0; // Restablecer la cantidad a 0 después de comprar
    document.getElementById(`cantidad-${id}`).textContent = producto.cantidad;
    actualizarBotonCompra(id, tipoProducto);
}

// Mostrar lista de elementos en el modal
function mostrarLista(tipoProducto) {
    const listaElementos = productos[tipoProducto];
    const modal = document.getElementById('detalleModal');
    const detalleLista = document.getElementById('detalleLista');
    
    // Limpiar la lista y los detalles
    detalleLista.innerHTML = '';

    // Crear la lista de elementos
    listaElementos.forEach(elemento => {
        const li = document.createElement('li');
        li.textContent = elemento.nombre;
        li.onclick = function () {
            mostrarDetalles(elemento.detalles); // Mostrar los detalles del elemento
        };
        detalleLista.appendChild(li);
    });

    // Mostrar el modal
    modal.style.display = 'block';
}

// Mostrar detalles en el modal
function mostrarDetalles(detalles) {
    const detalleLista = document.getElementById('detalleLista');
    detalleLista.innerHTML = ''; // Limpiar detalles previos

    // Crear la lista de detalles
    detalles.forEach(detalle => {
        const li = document.createElement('li');
        li.textContent = detalle;
        detalleLista.appendChild(li);
    });
}

// Cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('detalleModal');
    modal.style.display = 'none';
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    const modal = document.getElementById('detalleModal');
    if (event.target === modal) {
        cerrarModal();
    }
};
