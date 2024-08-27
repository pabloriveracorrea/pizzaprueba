import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegacion = ({ onCartClick }) => {
  const [token, setToken] = useState(false);
  const total = 25000;
  const handleChange = (token) => {
    console.log('token', token);
    setToken({ token: !token });
  };

  return (
    <>
      <Navbar bg="danger" variant="dark" className="navegacion">
        <Container>
          <div className="mx-3">
            <h3 className="pizza-spinner"> 🍕</h3>
          </div>
          <Navbar.Brand href="#home">Mamma Mía</Navbar.Brand>
          <Nav className="d-flex ms-auto align-items-center">
            <Nav.Link href="#home">
              <Button variant="outline-light" className="text-white">
                🍕 Home
              </Button>
            </Nav.Link>
            {!token && (
              <>
                <Nav.Link href="#login">
                  <Button
                    variant="outline-light"
                    onClick={() => setToken(!token)}
                    className="text-white"
                  >
                    🔐 Login
                  </Button>
                </Nav.Link>
                <Nav.Link href="#register">
                  <Button variant="outline-light" className="text-white">
                    🔐 Register
                  </Button>
                </Nav.Link>
              </>
            )}
            {token && (
              <>
                <Nav.Link href="#profile">
                  <Button variant="outline-light" className="text-white">
                    🔒 Profile
                  </Button>
                </Nav.Link>
                <Nav.Link href="#logout">
                  <Button
                    variant="outline-light"
                    onClick={() => setToken(!token)}
                    className="text-white"
                  >
                    🔒 Logout
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="justify-content-end ms-auto">
            <Nav.Link href="#cart">
              <Button variant="outline-light">
                🛒 Total: ${total.toLocaleString()}
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;
