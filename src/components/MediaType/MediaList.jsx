import TrendingCard from 'components/HomePage/TrendingCard';
import { Col, Row } from 'react-bootstrap';

export default function MediaList({ mediaList }) {
  if (!mediaList) {
    return;
  }
  return (
    <>
      <Row>
        {mediaList.results.map(item => (
          <Col key={item.id}>
            <TrendingCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
