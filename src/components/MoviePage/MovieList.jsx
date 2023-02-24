import TrendingCard from 'components/HomePage/TrendingCard';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { getTrending } from 'services/themoviedb/themoviedb.services';

export default function MovieList() {
  const [list, setList] = useState();

  const featchList = async () => {
    const data = await getTrending({
      mediaType: 'movie',
      timeWindow: 'week',
    }).then();
    return setList(data.results);
  };

  useEffect(() => {
    featchList();
  }, []);

  if (!list) {
    return;
  }
  return (
    <>
      <Row>
        {list.map(item => (
          <Col key={item.id}>
            <TrendingCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
