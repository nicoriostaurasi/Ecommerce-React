import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-1 text-primary">404</h1>
        <h2 className="mb-4">Página no encontrada</h2>
        <p className="mb-4">Lo sentimos, la página que buscas no existe.</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
