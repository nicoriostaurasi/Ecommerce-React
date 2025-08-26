import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, onAddToCart }) => {
  if (!product) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = (quantity) => {
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
    alert(`Agregado ${quantity} ${product.name} al carrito`);
  };

  return (
    <div className="container pt-4 pb-5">
      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.image} 
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <div className="text-light">
            <h1 className="mb-3 text-light">{product.name}</h1>
            <p className="fs-4 text-warning fw-bold mb-3">${product.price}</p>
            <p className="mb-4 text-light">{product.description}</p>
            
            <div className="mb-4">
              <span className="badge bg-secondary fs-6 px-3 py-2">
                {product.category}
              </span>
            </div>

            <ItemCount 
              stock={product.stock}
              initial={1}
              onAdd={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
