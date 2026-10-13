import { useState } from 'react';
import { productosData } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';

export const Productos = () => {
  const { agregarAlCarrito } = useCarrito();
  const [categoria, setCategoria] = useState('Todas');

  const productosFiltrados = categoria === 'Todas'
    ? productosData
    : productosData.filter((p) => p.categoria === categoria);

  return (
    <div className="container py-4">
      <h2 className="text-success fw-bold mb-4">Nuestros Productos</h2>

      <div className="d-flex gap-2 mb-4">
        {['Todas', 'Verduras', 'Frutas', 'Otros'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={`btn ${categoria === cat ? 'btn-success' : 'btn-outline-success'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productosFiltrados.map((p) => (
          <div className="col" key={p.id}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={`/src/assets/img/${p.imagen}`}
                className="card-img-top p-3"
                alt={p.nombre}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <span className="badge bg-secondary mb-2 align-self-start">{p.categoria}</span>
                <h5 className="card-title">{p.nombre}</h5>
                <p className="card-text text-muted small">{p.descripcion}</p>
                <div className="mt-auto d-flex justify-content-between align-items-center">
                  <span className="fs-5 fw-bold text-success">${p.precio}</span>
                  <button
                    onClick={() => agregarAlCarrito(p)}
                    className="btn btn-success btn-sm"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};