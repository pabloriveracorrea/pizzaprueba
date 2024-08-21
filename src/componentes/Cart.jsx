import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartItem from './CartItem';
import pizzas from '../assets/pizzas';

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    pizzas.map((pizza) => ({ ...pizza, cantidad: 0 }))
  );

  const aumentarCantidad = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId && item.cantidad > 0
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const getTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <Container style={{ marginTop: '50px' }}>
      <Card className="p-4 shadow-sm">
        <Card.Body>
          <Card.Title className="text-center mb-4">
            <h2>Carrito de Compras</h2>
          </Card.Title>
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={disminuirCantidad}
                aumentar={aumentarCantidad}
                descontar={disminuirCantidad}
              />
            ))}
          </ListGroup>
          <Row className="mt-3">
            {' '}
            {/* Reducido el margen superior de mt-4 a mt-3 */}
            <Col md={{ span: 6, offset: 6 }}>
              <div className="total-section text-end">
                <h4 className="text-dark py-2">
                  Total a pagar:{' '}
                  <strong className="bg-light text-dark p-2 rounded">
                    ${getTotal()}
                  </strong>
                </h4>
                <Button
                  variant="success"
                  size="lg"
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    borderRadius: '10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    textTransform: 'uppercase',
                  }}
                >
                  Comprar
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;
