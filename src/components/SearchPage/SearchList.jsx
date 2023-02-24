import { useEffect, useState } from 'react';
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom/dist';
import { getSearch } from 'services/themoviedb/themoviedb.services';

export default function SearchList() {
  const [list, setList] = useState();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { type } = useParams();

  const createSearch = async (mediaType, query) => {
    const data = await getSearch({ mediaType, query });
    return setList(data.results);
  };
  useEffect(() => {
    createSearch(type, query);
  }, [type, query]);
  if (!list) {
    return;
  }
  return (
    <ListGroup>
      {list.map(({ poster_path, title, name, id, overview }) => (
        <ListGroup.Item key={id}>
          <Row>
            <Col md="auto">
              <Image
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : ''
                }
                rounded
                style={{ maxWidth: '90px', maxHeight: '135px' }}
              />
            </Col>
            <Col>
              <h5>{title || name}</h5>
              <p>{overview}</p>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
