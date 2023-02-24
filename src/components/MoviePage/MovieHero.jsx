import { useNewDate, useNewDateYear, useRunTime } from 'hoocks/useNewDate';
import { useState } from 'react';
import {
  Badge,
  Button,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from 'react-bootstrap';
import { BsFillPlayFill } from 'react-icons/bs';
import { getMoviesId } from 'services/themoviedb/themoviedb.services';

export default function MovieHero({
  details: {
    id,
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    tagline,
    genres,
    runtime,
    vote_average,
  },
}) {
  const [lgShow, setLgShow] = useState(false);
  const [video, setVideo] = useState(null);
  const handleVideo = async () => {
    const data = await getMoviesId({
      movieId: id,
      mediaType: 'movie',
      detail: '/videos',
    });
    console.log('data:', data);
    setLgShow(true);
    return setVideo(data.results[0].key);
  };
  const voteAverageTxtColor =
    vote_average >= 7.0 || vote_average < 4.0 ? '' : 'dark';
  const voteAverageBgColor =
    (vote_average >= 7.0 && 'success') ||
    (vote_average >= 5.0 && 'warning') ||
    (vote_average < 5.0 && 'danger');
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

              <Badge
                bg={voteAverageBgColor}
                text={voteAverageTxtColor}
                className="p-2"
              >
                {vote_average.toFixed(1)}
              </Badge>
              <span>Оцінки користувачів</span>
              <Button variant="outline-light" onClick={handleVideo}>
                <BsFillPlayFill />
                Відтворити трейлер
              </Button>
              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>{tagline}</p>
              <b>Опис</b>
              <p>{overview}</p>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
        <Modal.Body className="p-0">
          <you-tube
            height="400"
            width="798"
            video_id={video}
            controls="0"
            autoplay="1"
          ></you-tube>
        </Modal.Body>
      </Modal>
    </>
  );
}
