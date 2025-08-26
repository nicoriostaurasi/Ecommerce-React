import React, { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center gap-3 mt-3">
      <div className="d-flex align-items-center gap-3">
        <button 
          className="btn btn-outline-light btn-sm"
          onClick={decrement}
          disabled={count <= 1}
        >
          -
        </button>
        <span className="fs-5 fw-bold px-3">{count}</span>
        <button 
          className="btn btn-outline-light btn-sm"
          onClick={increment}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
      <button 
        className="btn btn-primary btn-lg"
        onClick={handleAddToCart}
        disabled={stock === 0}
      >
        {stock === 0 ? 'Sin Stock' : 'Agregar al Carrito'}
      </button>
      <small className="text-muted">Stock disponible: {stock}</small>
    </div>
  );
};

export default ItemCount;
