import MovieFilter from 'components/MoviePage/MovieFilter';
import MovieList from 'components/MoviePage/MovieList';
import { Col, Container, Row } from 'react-bootstrap';

export default function MoviePage() {
  return (
    <Container className="pt-3">
      <Row>
        <Col md="auto">
          <MovieFilter />
        </Col>
        <Col>
          <MovieList />
        </Col>
      </Row>
    </Container>
  );
}
