import HomePage from 'page/HomePage';
import MovieDetailsPage from 'page/MovieDetailsPage';
import MoviePage from 'page/MoviePage';
import SearchPage from 'page/SearchPage';
import TvPage from 'page/TvDetailsPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import SearchList from './SearchPage/SearchList';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/search/" element={<SearchPage />}>
          <Route path="/search/:type" element={<SearchList />} />
        </Route>
      </Route>
    </Routes>
  );
}
