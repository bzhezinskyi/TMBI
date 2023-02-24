import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import SearchForm from 'components/SearchForm';

export default function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="success"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            TMBI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/movie">
                Фільми
              </Nav.Link>
              <Nav.Link as={Link} to="/tv">
                Серіали
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="success" onClick={() => setShow(true)}>
                <FaSearch style={{ width: '25px', height: '25px' }} />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <SearchForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
