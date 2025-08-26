import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 col-lg-3 mb-4">
          <div className="card bg-secondary text-light h-100">
            <img 
              src={product.image} 
              className="card-img-top" 
              alt={product.name}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text flex-grow-1">{product.description}</p>
              <div className="mt-auto">
                <p className="card-text">
                  <span className="fs-4 fw-bold text-dark">${product.price}</span>
                </p>
                <p className="card-text">
                  <small className="text-muted">Stock: {product.stock}</small>
                </p>
                <Link 
                  to={`/item/${product.id}`} 
                  className="btn btn-primary w-100"
                >
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
