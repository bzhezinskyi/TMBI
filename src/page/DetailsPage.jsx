import MovieHero from 'components/MoviePage/MovieHero';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesId } from 'services/themoviedb/themoviedb.services';

export default function DetailsPage() {
  const { mediaType } = useParams();
  const { id } = useParams();

  const [movie, setMovie] = useState();

  const createMovie = async (movieId, mediaType) => {
    const data = await getMoviesId({ movieId, mediaType }).then();
    return setMovie(data);
  };
  useEffect(() => {
    createMovie(id, mediaType);
  }, [id, mediaType]);

  if (!movie) {
    return;
  }
  return (
    <>
      <MovieHero details={movie} />
    </>
  );
}
