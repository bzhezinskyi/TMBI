import { useNewDate, useNewDateYear, useRunTime } from 'hoocks/useNewDate';
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function MovieCard({
  details: {
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    status,
    tagline,
    genres,
    runtime,
  },
}) {
  return (
    <>
      <div
        className="py-4"
        style={{
          color: '#FFF',
          minHeight: '450px',
          backgroundImage:
            'linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.86) 30%, rgba(31.5, 31.5, 31.5, 0.86) 100%)',
        }}
      >
        <Container>
          <Row>
            <Col sm="auto" className="d-flex justify-content-center">
              <Image
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
                rounded
                style={{ maxWidth: '300px', maxHeight: '450px' }}
              />
            </Col>
            <Col>
              <h2>
                {title}
                <span style={{ opacity: 0.7 }}>
                  ({useNewDateYear(release_date)})
                </span>
              </h2>
              <p>{`${useNewDate(release_date)} * ${genres.map(
                genre => genre.name
              )} * ${useRunTime(runtime)}`}</p>
              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>{tagline}</p>
              <b>Опис</b>
              <p>{overview}</p>
            </Col>
          </Row>
        </Container>
      </div>

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
