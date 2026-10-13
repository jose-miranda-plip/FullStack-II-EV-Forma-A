import { Link } from 'react-router-dom';
import { Leaf, Truck, ShieldCheck } from 'lucide-react';

export const Home = () => {
  return (
    <div className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-3 text-center border">
        <h1 className="display-4 fw-bold text-success">Bienvenido a HuertoHogar</h1>
        <p className="lead fs-4 mt-3">
          Llevamos lo mejor del campo directamente a la puerta de tu hogar.
        </p>
        <Link to="/productos" className="btn btn-success btn-lg mt-3">
          Ver Catálogo de Productos
        </Link>
      </div>

      <div className="row g-4 py-4 text-center">
        <div className="col-md-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <Leaf size={48} className="text-success mb-3" />
            <h3 className="h5">100% Orgánico</h3>
            <p className="text-muted">Cultivados con prácticas sustentables y libres de químicos.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <Truck size={48} className="text-success mb-3" />
            <h3 className="h5">Envío Rápido</h3>
            <p className="text-muted">Recibe tus verduras y frutas frescas el mismo día.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <ShieldCheck size={48} className="text-success mb-3" />
            <h3 className="h5">Calidad Garantizada</h3>
            <p className="text-muted">Selección rigurosa para garantizar la frescura de tu pedido.</p>
          </div>
        </div>
      </div>
    </div>
  );
};