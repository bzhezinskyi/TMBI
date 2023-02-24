import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom/dist';

export default function SearchAppBar() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { type } = useParams();
  return (
    <>
      <ButtonGroup vertical>
        <Button
          as={Link}
          to="/search"
          variant="outline-success"
          active
          disabled
        >
          Результат пошуку
        </Button>
        <Button
          as={Link}
          to={`/search/movie?query=${query}`}
          variant="outline-success"
          active={type === 'movie'}
          disabled={type === 'movie'}
        >
          Фільми
        </Button>
        <Button
          as={Link}
          to={`/search/tv?query=${query}`}
          variant="outline-success"
          active={type === 'tv'}
          disabled={type === 'tv'}
        >
          Серіали
        </Button>
        <Button
          as={Link}
          to={`/search/person?query=${query}`}
          variant="outline-success"
          active={type === 'persone'}
          disabled={type === 'persone'}
        >
          Люди
        </Button>
      </ButtonGroup>
    </>
  );
}
