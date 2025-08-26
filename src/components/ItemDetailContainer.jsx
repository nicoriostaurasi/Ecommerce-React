import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../data/products';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    getProductById(id)
      .then(productData => {
        setProduct(productData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = (product, quantity) => {
    // This will be implemented later when we add cart functionality
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  if (loading) {
    return (
      <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div className="spinner-border text-light mb-3" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p>Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h2 className="text-danger mb-3">Error</h2>
          <p>{error}</p>
          <a href="/" className="btn btn-primary">Volver al inicio</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-light min-vh-100 pt-0">
      <ItemDetail product={product} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ItemDetailContainer;
