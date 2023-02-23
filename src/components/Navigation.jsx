import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" bg="success" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          TMBI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/movie">
              Movie
            </Nav.Link>
            <Nav.Link as={Link} to="/tv">
              TV
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
