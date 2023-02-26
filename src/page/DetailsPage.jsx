import CreditsList from 'components/DetailsPage/CreditsList';
import Hero from 'components/DetailsPage/Hero';
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
      <Hero details={movie} />
      <CreditsList />
    </>
  );
}
