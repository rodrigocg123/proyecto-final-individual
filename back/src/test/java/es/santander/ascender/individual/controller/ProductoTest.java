package es.santander.ascender.individual.model;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class ProductoTest {

    @Test
    public void testProductoConstructor() {
        // Crea un producto con el constructor
        Producto producto = new Producto(1, "Producto A", "Descripción del producto A", 100.0f, 10);
        
        // Verifica que los valores sean correctos
        assertEquals(1, producto.getId());
        assertEquals("Producto A", producto.getNombre());
        assertEquals("Descripción del producto A", producto.getDescripcion());
        assertEquals(100.0f, producto.getPrecio());
        assertEquals(10, producto.getCantidad());
    }

    @Test
    public void testSettersAndGetters() {
        Producto producto = new Producto();

        // Set de valores
        producto.setId(2);
        producto.setNombre("Producto B");
        producto.setDescripcion("Descripción del producto B");
        producto.setPrecio(200.0f);
        producto.setCantidad(20);

        // Verifica los getters
        assertEquals(2, producto.getId());
        assertEquals("Producto B", producto.getNombre());
        assertEquals("Descripción del producto B", producto.getDescripcion());
        assertEquals(200.0f, producto.getPrecio());
        assertEquals(20, producto.getCantidad());
    }

    @Test
    public void testDescripcionSizeValidation() {
        Producto producto = new Producto();
        
        // Intentar establecer una descripción mayor a 150 caracteres
        String descripcionLarga = "a".repeat(151); // Crea una cadena de 151 caracteres

        producto.setDescripcion(descripcionLarga);

        // Verifica que la descripción se trunque o no cause errores
        assertEquals(descripcionLarga.substring(0, 150), producto.getDescripcion());
    }

    @Test
    public void testPrecioMinValidation() {
        Producto producto = new Producto();
        
        // Establece un precio negativo
        producto.setPrecio(-1.0f);
        
        // Verifica que el precio no sea negativo
        assertTrue(producto.getPrecio() >= 0.0f, "El precio no puede ser negativo.");
    }

    @Test
    public void testCantidadMinValidation() {
        Producto producto = new Producto();
        
        // Establece una cantidad negativa
        producto.setCantidad(-5);
        
        // Verifica que la cantidad no sea negativa
        assertTrue(producto.getCantidad() >= 0, "La cantidad no puede ser negativa.");
    }

    @Test
    public void testNombreSizeValidation() {
        Producto producto = new Producto();
        
        // Intentar establecer un nombre mayor a 30 caracteres
        String nombreLargo = "a".repeat(31); // Crea una cadena de 31 caracteres

        producto.setNombre(nombreLargo);

        // Verifica que el nombre no sea mayor a 30 caracteres
        assertEquals(nombreLargo.substring(0, 30), producto.getNombre());
    }

    // Prueba para verificar que el campo 'descripcion' no puede ser null
    @Test
    public void testDescripcionNotNull() {
        Producto producto = new Producto();
        
        // Intenta establecer descripcion como null
        assertThrows(NullPointerException.class, () -> {
            producto.setDescripcion(null);
        });
    }

    // Verifica que la creación de un producto con valores válidos funcione correctamente
    @Test
    public void testProductoCreacionValida() {
        Producto producto = new Producto(1, "Producto C", "Descripción del producto C", 300.0f, 5);
        
        assertNotNull(producto);
    }
}
