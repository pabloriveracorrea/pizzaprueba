import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Registro = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(false);
    if (password.length < 6 || correo == '') {
      if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
      } else {
        alert(
          'El correo no debe estar vacio y debe tener el siguiente formato : a.a@gmail.com'
        );
      }
      return;
    } else if (password === confirmPassword) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        console.log('Correo:', correo);
        console.log('Password:', password);
        console.log('Confirmacion:', confirmPassword);
        // alert('Formulario enviado');
        if (correo.length > 7 && password !== '' && confirmPassword !== '') {
          handleShow();
        }
      }

      setValidated(true);
    } else {
      alert('Las contraseñas no coinciden');
    }
  };
  return (
    <>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="container w-50 pb-4 text-white"
      >
        <Header
          titulo="Mamma Mia"
          descripcion="Tenemos las mejores pizzas que podrás encontrar"
        />
        <h4 className="text-center text-white">Registro</h4>
        <Row className="mb-3">
          <Form.Group controlId="validationCustomUsername" className="mt-2">
            <Form.Label>Correo electrónico</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Correo"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setCorreo(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa un correo.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formGroupPassword" className="my-2">
            <Form.Label>Contraseña</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa la contraseña.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="formGroupPassword" className="my-2">
            <Form.Label>Confirmar contraseña</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="confirmPassword"
                placeholder="Conformar contraseña"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Por favor ingresa confirmación de contraseña.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit" className="bg-warning">
          Registrar
        </Button>
        <Modal show={show} onHide={handleClose} className="bg-dark">
          <Modal.Header closeButton>
            <Modal.Title>Registro exitoso!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image
              src="https://media.istockphoto.com/id/1194550265/es/vector/concepto-del-servicio-de-entrega-r%C3%A1pida-de-pizza-hombre-fuera-del-monitor-de-pantalla-las.jpg?s=612x612&w=0&k=20&c=n3fi1qt-QXNKq4wdXsFcvewj1VZU8gfnpU7YCks4flY="
              roundedCircle
              className="w-75"
            />
            <p>Felicidades, registro exitoso!</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default Registro;
