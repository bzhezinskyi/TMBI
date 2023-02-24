import { useNewDateLocal } from 'hoocks/useNewDate';
import { Badge, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function TrendingCard({
  item: {
    id,
    title,
    name,
    poster_path,
    release_date,
    first_air_date,
    vote_average,
    media_type,
  },
}) {
  const voteAverageTxtColor =
    vote_average >= 7.0 || vote_average < 4.0 ? '' : 'dark';
  const voteAverageBgColor =
    (vote_average >= 7.0 && 'success') ||
    (vote_average >= 5.0 && 'warning') ||
    (vote_average < 5.0 && 'danger');

  return (
    <Card
      as={Link}
      to={`/${media_type}/${id}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        width: '180px',
        margin: '8px',
      }}
    >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
      />
      <Card.Body className="px-2" style={{ minHeight: '80px' }}>
        <b>{title || name}</b>
      </Card.Body>
      <Card.Footer
        as={Badge}
        bg={voteAverageBgColor}
        text={voteAverageTxtColor}
        className="d-flex justify-content-around"
      >
        <span>{useNewDateLocal(release_date || first_air_date)}</span>
        <span>{vote_average.toFixed(1)}</span>
      </Card.Footer>
    </Card>
  );
}
