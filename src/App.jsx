import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Mi Tienda!" />
      <Footer />
    </>
  );
}

export default App
