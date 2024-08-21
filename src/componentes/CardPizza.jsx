import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';
// eslint-disable-next-line react/prop-types
function CardPizza({ img, name, ingredientes, price }) {
  return (
    <Card border="warning" className="text-center m-3 card-pizza">
      <Card.Img variant="top" src={img} className="img-fluid" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <hr />
        <Card.Text>Ingredientes:</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
          {' '}
          <Spinner animation="" role="" variant="">
            <span>🍕</span>
          </Spinner>{' '}
          {ingredientes}
        </Card.Subtitle>
      </Card.Body>
      <hr />
      <Card.Title>
        Precio: $ <span>{price.toLocaleString()}</span>
      </Card.Title>
      <Card.Body className="flex">
        <Card.Link href="#" className=" col md-col-4">
          {' '}
          <Button variant="secondary">Ver más </Button>
        </Card.Link>
        <Card.Link href="#" className="col md-col-4">
          {' '}
          <Button variant="dark">Añadir 🛒</Button>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
CardPizza.protoType = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredientes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CardPizza;
