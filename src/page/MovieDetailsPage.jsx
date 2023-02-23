import { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb/themoviedb.services';

export default function MoviePage() {
  const [movie, setMovie] = useState();
  console.log('movie:', movie);

  const { id } = useParams();

  const createMovie = async movieId => {
    const data = await getMoviesId({ movieId, mediaType: 'movie' }).then();
    return setMovie(data);
  };
  useEffect(() => {
    createMovie(id);
  }, [id]);

  if (!movie) {
    return;
  }
  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    status,
    tagline,
  } = movie;
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img
          src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`}
          alt="Card image"
          style={{
            height: '482px',
          }}
        />
        <Card.ImgOverlay
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.7) 30%, rgba(31.5, 31.5, 31.5, 0.7) 100%)',
          }}
        >
          <Container>
            <Row>
              <Col sm="auto">
                <Image
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
                  rounded
                  style={{ width: '300px', height: '450px' }}
                />
              </Col>
              <Col>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{tagline}</Card.Text>
                <Card.Text>{overview}</Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
      <Container>
        <h2>{title}</h2>
        <p>{overview}</p>
        <p>{release_date}</p>
        <p>{status}</p>
        <p>{tagline}</p>
      </Container>
    </>
  );
}
