import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Spinner from 'react-bootstrap/Spinner';

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
          <Spinner role="status" className="mx-3">
            <h3 className="pizza-spinner"> 🍕</h3>
          </Spinner>
          <Navbar.Brand href="#home"> Mamma Mía</Navbar.Brand>
          <Nav
            className="me-auto my-4 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              {' '}
              <Button variant="outline-warning" className="text-white">
                🍕 Home
              </Button>
            </Nav.Link>

            <Nav hidden={token ? false : true} onChange={handleChange}>
              <Nav.Link href="#action2">
                {' '}
                <Button variant="outline-warning" className="text-white">
                  🔒 Profile
                </Button>
              </Nav.Link>
              <Nav.Link href="#action3">
                {' '}
                <Button
                  variant="outline-warning"
                  onClick={() => setToken(!token)}
                  className="text-white"
                >
                  🔒 Logout
                </Button>
              </Nav.Link>
            </Nav>
            <Nav hidden={token ? true : false} onChange={handleChange}>
              <Nav.Link href="#action4">
                {' '}
                <Button
                  variant="outline-warning"
                  onClick={() => setToken(!token)}
                  className="text-white"
                >
                  🔐 Login
                </Button>
              </Nav.Link>
              <Nav.Link href="#action5">
                {' '}
                <Button variant="outline-warning" className="text-white">
                  🔐 Register
                </Button>
              </Nav.Link>
            </Nav>
          </Nav>
          <Nav className="justify-content-end ms-auto">
            <Nav.Link href="#action6">
              {' '}
              <Button variant="outline-light">
                🛒 Total: $ {total.toLocaleString()}
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Navegacion;
