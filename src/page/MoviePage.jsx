import MovieFilter from 'components/MoviePage/MovieFilter';
import MovieList from 'components/MoviePage/MovieList';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getList } from 'services/themoviedb/themoviedb.services';

export default function MoviePage() {
  const [sorting, setSorting] = useState('trending');
  const [timeWindow, setTimeWindow] = useState('/week');
  const [movieList, setMovieList] = useState(null);

  const featchMovieList = async ({ sorting, timeWindow }) => {
    const data = await getList({ sorting, mediaType: 'movie', timeWindow });
    setMovieList(data);
  };
  useEffect(() => {
    featchMovieList({ sorting, timeWindow });
  }, [sorting, timeWindow]);
  return (
    <Container className="pt-3">
      <Row>
        <Col md="auto" style={{ minWidth: '250px' }}>
          <MovieFilter />
        </Col>
        <Col>
          <MovieList movieList={movieList} />
        </Col>
      </Row>
    </Container>
  );
}
