import { Card, Nav, Navbar } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom/dist';

export default function SearchAppBar() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { type } = useParams();
  return (
    <>
      <Card className="py-4 px-2">
        <Navbar bg="success" variant="dark" className="p-4">
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to={`/search/movie?query=${query}`}
              active={type === 'movie'}
            >
              Фільми
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/search/tv?query=${query}`}
              active={type === 'tv'}
            >
              Серіали
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`/search/person?query=${query}`}
              active={type === 'person'}
            >
              Люди
            </Nav.Link>
          </Nav>
        </Navbar>
      </Card>
    </>
  );
}
