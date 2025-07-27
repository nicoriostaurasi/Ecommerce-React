import React from 'react';


const mockProducts = [
  { id: 1, name: 'Producto 1', price: '$8.000' },
  { id: 2, name: 'Producto 2', price: '$10.000' },
  { id: 3, name: 'Producto 3', price: '$12.000' },
  { id: 4, name: 'Producto 4', price: '$15.000' },
  { id: 5, name: 'Producto 5', price: '$20.000' },
  { id: 6, name: 'Producto 6', price: '$25.000' },
  { id: 7, name: 'Producto 7', price: '$30.000' },
  { id: 8, name: 'Producto 8', price: '$35.000' },
  { id: 9, name: 'Producto 9', price: '$40.000' },
  { id: 10, name: 'Producto 10', price: '$45.000' },
];

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="bg-dark text-light p-4">
      <h2>{greeting}</h2>
      <div className="mt-4">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            style={{
              backgroundColor: '#212529',
              border: '1px solid #444',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
            }}
          >
            <h4>{product.name}</h4>
            <p>Precio: {product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;
