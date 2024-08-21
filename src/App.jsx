import Navegacion from './componentes/Navegacion.jsx';
import Home from './componentes/Home.jsx';
import Footer from './componentes/Footer.jsx';
import Login from './componentes/Login.jsx';
import Registro from './componentes/Registro.jsx';
import Cart from './componentes/Cart.jsx'; // Manten esta línea
import './App.css';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleShowCart = () => {
    setCurrentView('cart');
  };
  return (
    <>
      <Navegacion onCartClick={handleShowCart} />
      {currentView === 'cart' && <Cart />}
      <Home />
      <Login />
      <Registro />
      <Cart />
      <Footer />
    </>
  );
}

export default App;
