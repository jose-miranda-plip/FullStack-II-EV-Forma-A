export const Nosotros = () => {
  return (
    <div className="container py-5">
      <div className="col-lg-8 mx-auto">
        <h2 className="text-success fw-bold mb-4 text-center">Sobre HuertoHogar</h2>
        <p className="lead text-muted text-center mb-5">
          Somos un emprendimiento comprometido con acercar alimentos frescos, orgánicos y de alta calidad directamente de nuestros agricultores locales a la mesa de nuestros clientes.
        </p>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 bg-light p-4 shadow-sm">
              <h4 className="fw-bold text-success">Nuestra Misión</h4>
              <p className="text-secondary mt-2">
                Promover una alimentación saludable e impulsarla mediante la comercialización justa de frutas y verduras frescas cosechadas de manera sustentable.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 bg-light p-4 shadow-sm">
              <h4 className="fw-bold text-success">Nuestra Visión</h4>
              <p className="text-secondary mt-2">
                Ser la plataforma líder en distribución de insumos orgánicos y ecológicos, destacando por la rapidez de entrega y excelencia en el servicio al cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};