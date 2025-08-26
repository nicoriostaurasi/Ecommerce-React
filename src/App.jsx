import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Home */}
        <Route 
          path="/" 
          element={<ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />} 
        />
        
        {/* Categorias */}
        <Route 
          path="/category/:categoryId" 
          element={<ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />} 
        />
        
        {/* Detalles */}
        <Route 
          path="/item/:id" 
          element={<ItemDetailContainer />} 
        />
        
        {/* 404 */}
        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
