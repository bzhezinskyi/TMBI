import { useParams } from 'react-router-dom';
import MoviePage from './MoviePage';
import TvPage from './TvPage';

export default function MediaType() {
  const { mediaType } = useParams();

  return (
    <>
      {mediaType === 'movie' && <MoviePage />}
      {mediaType === 'tv' && <TvPage />}
    </>
  );
}
