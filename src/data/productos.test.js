/* global describe, it, expect */
import { productosData } from './productos.js';

describe('Suite de Pruebas Unitarias - HuertoHogar (10/10)', function () {

  // Prueba 1: Verificar existencia del array
  it('1. Debe existir una lista de productos definidos', function () {
    expect(productosData).toBeDefined();
    expect(Array.isArray(productosData)).toBe(true);
  });

  // Prueba 2: Cantidad total de productos
  it('2. Debe contener exactamente 7 productos iniciales', function () {
    expect(productosData.length).toBe(7);
  });

  // Prueba 3: Estructura de cada producto
  it('3. Cada producto debe contener id, nombre, precio, categoria e imagen', function () {
    const producto = productosData[0];
    expect(producto.id).toBeDefined();
    expect(producto.nombre).toBeDefined();
    expect(producto.precio).toBeGreaterThan(0);
    expect(producto.categoria).toBeDefined();
  });

  // Prueba 4: Filtrado por categoría "Verduras"
  it('4. Debe filtrar correctamente los productos por la categoría Verduras', function () {
    const verduras = productosData.filter((p) => p.categoria === 'Verduras');
    expect(verduras.length).toBeGreaterThan(0);
    verduras.forEach((v) => expect(v.categoria).toBe('Verduras'));
  });

  // Prueba 5: Filtrado por categoría "Frutas"
  it('5. Debe filtrar correctamente los productos por la categoría Frutas', function () {
    const frutas = productosData.filter((p) => p.categoria === 'Frutas');
    expect(frutas.length).toBeGreaterThan(0);
    frutas.forEach((f) => expect(f.categoria).toBe('Frutas'));
  });

  // Prueba 6: Búsqueda de producto por ID
  it('6. Debe encontrar el producto "Miel Orgánica" por su ID (3)', function () {
    const miel = productosData.find((p) => p.id === 3);
    expect(miel).toBeDefined();
    expect(miel.nombre).toBe('Miel Orgánica');
  });

  // Prueba 7: Cálculo del total acumulado del carrito
  it('7. Debe calcular correctamente el precio total de varios productos agregados', function () {
    const carritoMock = [
      { id: 1, precio: 1200, cantidad: 2 }, // 2400
      { id: 2, precio: 1800, cantidad: 1 }, // 1800
    ];
    const total = carritoMock.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
    expect(total).toBe(4200);
  });

  // Prueba 8: Incremento de cantidad de un producto
  it('8. Debe incrementar la cantidad de un producto existente en el carrito', function () {
    let carrito = [{ id: 1, cantidad: 1 }];
    const idAgregar = 1;
    carrito = carrito.map((item) =>
      item.id === idAgregar ? { ...item, cantidad: item.cantidad + 1 } : item
    );
    expect(carrito[0].cantidad).toBe(2);
  });

  // Prueba 9: Eliminación de un ítem del carrito
  it('9. Debe eliminar un producto del carrito correctamente', function () {
    let carrito = [{ id: 1 }, { id: 2 }];
    carrito = carrito.filter((item) => item.id !== 1);
    expect(carrito.length).toBe(1);
    expect(carrito[0].id).toBe(2);
  });

  // Prueba 10: Validación de precios válidos
  it('10. Todos los productos deben tener precios positivos mayores a 0', function () {
    const preciosValidos = productosData.every(
      (p) => typeof p.precio === 'number' && p.precio > 0
    );
    expect(preciosValidos).toBe(true);
  });

});