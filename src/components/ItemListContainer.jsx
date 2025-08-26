import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts, categories } from '../data/products';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    getProducts(categoryId)
      .then(productsData => {
        setProducts(productsData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [categoryId]);

  const getCategoryName = () => {
    if (!categoryId) return 'Todos los Productos';
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Categoría';
  };

  if (loading) {
    return (
      <section className="bg-dark text-light p-4 min-vh-100">
        <div className="container">
          <div className="text-center mt-5">
            <div className="spinner-border text-light mb-3" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p>Cargando productos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-dark text-light p-4 min-vh-100">
        <div className="container">
          <div className="text-center mt-5">
            <h2 className="text-danger mb-3">Error</h2>
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-dark text-light p-4 min-vh-100">
      <div className="container">
        <div className="text-center mb-5">
          <h2>{greeting}</h2>
          <h3 className="text-dark mt-3">{getCategoryName()}</h3>
          {products.length > 0 && (
            <p className="text-muted">Mostrando {products.length} productos</p>
          )}
        </div>
        
        {products.length === 0 ? (
          <div className="text-center mt-5">
            <h4>No hay productos disponibles en esta categoría</h4>
            <p className="text-muted">Intenta con otra categoría</p>
          </div>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </section>
  );
};

export default ItemListContainer;
