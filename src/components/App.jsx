import HomePage from 'page/HomePage';
import MoviePage from 'page/MovieDetailsPage';
import TvPage from 'page/TvDetailsPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/tv" element={<TvPage />} />
      </Route>
    </Routes>
  );
}
