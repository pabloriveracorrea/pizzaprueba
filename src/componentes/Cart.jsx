import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';
import pizzas from '../assets/pizzas';

const Cart = () => {
  // Inicia con todas las pizzas en 0
  const [cartItems, setCartItems] = useState(
    pizzas.map((pizza) => ({ ...pizza, cantidad: 0 }))
  );

  //aumentar la cantidad
  const aumentarCantidad = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  //disminuir la cantidad
  const disminuirCantidad = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.cantidad > 0
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  // Función para calcular el total
  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
      <h2>Carrito de Compras</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={disminuirCantidad} // resta
            aumentar={aumentarCantidad}
            descontar={disminuirCantidad}
          />
        ))}
      </ListGroup>
      <div
        className="total-section"
        style={{ marginTop: '20px', textAlign: 'right' }}
      >
        <h4 className="text-white py-3">
          Total a pagar:{' '}
          <strong className="bg-light text-dark p-2 rounded">
            ${getTotal()}{' '}
          </strong>{' '}
        </h4>
        <Button variant="success">Comprar</Button>
      </div>
    </div>
  );
};

export default Cart;
