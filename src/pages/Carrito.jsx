import { useCarrito } from '../context/CarritoContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Carrito = () => {
  const { carrito, cambiarCantidad, eliminarDelCarrito, vaciarCarrito, totalPrecio } = useCarrito();

  if (carrito.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Tu carrito está vacío 🛒</h2>
        <p className="text-muted">¡Explora nuestro catálogo y agrega productos frescos!</p>
        <Link to="/productos" className="btn btn-success mt-3">Ir a Productos</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="text-success fw-bold mb-4">Tu Carrito de Compras</h2>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="list-group">
            {carrito.map((item) => (
              <div key={item.id} className="list-group-item d-flex align-items-center justify-content-between p-3">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={`/src/assets/img/${item.imagen}`}
                    alt={item.nombre}
                    style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    className="rounded"
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{item.nombre}</h6>
                    <small className="text-muted">${item.precio} c/u</small>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button onClick={() => cambiarCantidad(item.id, -1)} className="btn btn-sm btn-outline-secondary">
                    <Minus size={14} />
                  </button>
                  <span className="fw-bold px-2">{item.cantidad}</span>
                  <button onClick={() => cambiarCantidad(item.id, 1)} className="btn btn-sm btn-outline-secondary">
                    <Plus size={14} />
                  </button>
                </div>

                <div className="text-end">
                  <p className="fw-bold text-success mb-0">${item.precio * item.cantidad}</p>
                  <button onClick={() => eliminarDelCarrito(item.id)} className="btn btn-link text-danger p-0">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button onClick={vaciarCarrito} className="btn btn-outline-danger mt-3 btn-sm">
            Vaciar Carrito
          </button>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 bg-light p-3 shadow-sm">
            <h5 className="fw-bold mb-3">Resumen de Compra</h5>
            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span className="fw-bold">${totalPrecio}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Envío</span>
              <span className="text-success fw-bold">Gratis</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-4 fs-5 fw-bold">
              <span>Total</span>
              <span className="text-success">${totalPrecio}</span>
            </div>
            <button className="btn btn-success w-100 py-2">Proceder al Pago</button>
          </div>
        </div>
      </div>
    </div>
  );
};