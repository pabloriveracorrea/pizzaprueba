import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const CartItem = ({ item, aumentar, descontar }) => {
  return (
    <ListGroup.Item
      className="d-flex align-items-center justify-content-between"
      style={{ padding: '10px' }}
    >
      <div className="d-flex align-items-center">
        <img
          src={item.img}
          alt={item.titulo}
          style={{ width: '80px', height: '80px', marginRight: '15px' }}
        />
        <div>
          <h6>Pizza {item.name}</h6>
          <p>Precio: ${item.price}</p>
          <p>
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => aumentar(item.id)}
              style={{ marginRight: '10px' }}
            >
              +
            </Button>
            {item.cantidad > 0 && (
              <>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => descontar(item.id)}
                >
                  -
                </Button>
                <span style={{ marginLeft: '10px' }}>
                  Cantidad: {item.cantidad}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
      <div>
        <p>Total: ${item.price * item.cantidad}</p>
      </div>
    </ListGroup.Item>
  );
};

export default CartItem;
