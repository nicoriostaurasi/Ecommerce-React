import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartWidget from './CartWidget';
import { getCategories } from '../data/products';

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getCategories()
      .then(categoriesData => {
        setCategories(categoriesData);
      })
      .catch(err => {
        console.error('Error loading categories:', err);
      });
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">Mi Tienda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link text-light ${isActive('/') ? 'active' : ''}`} 
                to="/"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle text-light" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu bg-secondary">
                <li>
                  <Link className="dropdown-item text-light" to="/">
                    Todos los Productos
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                {categories.map(category => (
                  <li key={category.id}>
                    <Link 
                      className={`dropdown-item text-light ${isActive(`/category/${category.id}`) ? 'active' : ''}`}
                      to={`/category/${category.id}`}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
