import MovieHero from 'components/MoviePage/MovieHero';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb/themoviedb.services';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState();

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
  return (
    <>
      <MovieHero details={movie} />
    </>
  );
}
