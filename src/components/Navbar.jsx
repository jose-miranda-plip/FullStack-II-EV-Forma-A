import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCarrito } from '../context/CarritoContext';

export const Navbar = () => {
  const { totalItems } = useCarrito();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-4" to="/">
          <Leaf size={28} />
          <span>HuertoHogar</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/productos">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/nosotros">Nosotros</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/login">Iniciar sesión</NavLink>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="btn btn-outline-light position-relative ms-lg-3">
                <ShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};