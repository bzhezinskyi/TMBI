import MediaFilter from 'components/MediaType/MediaFilter';
import MediaList from 'components/MediaType/MediaList';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getList } from 'services/themoviedb/themoviedb.services';

export default function TvPage() {
  const [options, seOtoptions] = useState('trending/tv/week');

  const [movieList, setMovieList] = useState(null);

  const featchMovieList = async ({ options }) => {
    const data = await getList({ options });
    setMovieList(data);
  };
  useEffect(() => {
    featchMovieList({ options });
  }, [options]);
  return (
    <Container className="pt-3">
      <Row>
        <Col md="auto" style={{ minWidth: '250px' }}>
          <MediaFilter options={query => seOtoptions(query)} />
        </Col>
        <Col>
          <MediaList mediaList={movieList} />
        </Col>
      </Row>
    </Container>
  );
}
