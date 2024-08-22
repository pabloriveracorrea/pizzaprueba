import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegacion = () => {
  const [token, setToken] = useState(false);
  const total = 25000;
  const handleChange = (token) => {
    console.log('token', token);
    setToken({ token: !token });
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navegacion">
        <Container>
          <div className="mx-3">
            <h3 className="pizza-spinner"> 🍕</h3>
          </div>
          <Navbar.Brand href="#home">Mamma Mía</Navbar.Brand>
          <Nav className="d-flex ms-auto align-items-center">
            <Nav.Link href="#home">
              <Button variant="outline-warning" className="text-white">
                🍕 Home
              </Button>
            </Nav.Link>
            {!token && (
              <>
                <Nav.Link href="#login">
                  <Button
                    variant="outline-warning"
                    onClick={() => setToken(!token)}
                    className="text-white"
                  >
                    🔐 Login
                  </Button>
                </Nav.Link>
                <Nav.Link href="#register">
                  <Button variant="outline-warning" className="text-white">
                    🔐 Register
                  </Button>
                </Nav.Link>
              </>
            )}
            {token && (
              <>
                <Nav.Link href="#profile">
                  <Button variant="outline-warning" className="text-white">
                    🔒 Profile
                  </Button>
                </Nav.Link>
                <Nav.Link href="#logout">
                  <Button
                    variant="outline-warning"
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
