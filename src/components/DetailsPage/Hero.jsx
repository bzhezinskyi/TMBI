import { useNewDate, useNewDateYear, useRunTime } from 'hoocks/useNewDate';
import { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb/themoviedb.services';

export default function Hero({
  details: {
    id,
    title,
    name,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    first_air_date,
    tagline,
    genres,
    runtime,
    vote_average,
    episode_run_time,
  },
}) {
  const { mediaType } = useParams();

  const [lgShow, setLgShow] = useState(false);
  const [video, setVideo] = useState([]);

  const handleVideo = async (movieId, mediaType, detail) => {
    const data = await getMoviesId({
      movieId,
      mediaType,
      detail,
    }).then();
    return setVideo(data.results);
  };

  useEffect(() => {
    handleVideo(id, mediaType, '/videos');
  }, [id, mediaType]);

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
                {title || name}
                <span style={{ opacity: 0.7 }}>
                  ({useNewDateYear(release_date || first_air_date)})
                </span>
              </h2>
              <p>{`${useNewDate(release_date || first_air_date)} * ${genres.map(
                genre => genre.name
              )} * ${useRunTime(runtime || episode_run_time)}`}</p>

              <Badge
                bg={voteAverageBgColor}
                text={voteAverageTxtColor}
                className="p-2"
              >
                {vote_average.toFixed(1)}
              </Badge>
              <span>Оцінки користувачів</span>
              {video.length > 0 && (
                <Button variant="outline-light" onClick={() => setLgShow(true)}>
                  <BsFillPlayFill />
                  Відтворити трейлер
                </Button>
              )}
              <p style={{ fontStyle: 'italic', opacity: 0.7 }}>{tagline}</p>
              <b>Опис</b>
              <p>{overview}</p>
            </Col>
          </Row>
        </Container>
      </div>
      {video.length > 0 && (
        <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)}>
          <Modal.Body className="p-0">
            <you-tube
              height="400"
              width="798"
              video_id={video[0].key}
              controls="0"
              autoplay="1"
            ></you-tube>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}
