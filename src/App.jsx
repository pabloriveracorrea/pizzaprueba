import Navegacion from './componentes/Navegacion.jsx';
import Home from './componentes/Home.jsx';
import Footer from './componentes/Footer.jsx';
// import Login from './componentes/Login.jsx'
// import Registro from './componentes/Registro.jsx'
import Cart from './componentes/Cart.jsx';
import './App.css';
import { useState } from 'react';
import Pizza from './componentes/Pizza.jsx';

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
      {/* <Login />
      <Registro />
      <Cart/> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
