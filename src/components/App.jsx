import DetailsPage from 'page/DetailsPage';
import HomePage from 'page/HomePage';
import MediaType from 'page/MediaType';
import SearchPage from 'page/SearchPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import SearchList from './SearchPage/SearchList';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:mediaType" element={<MediaType />} />
        <Route path="/:mediaType/:id" element={<DetailsPage />} />
        <Route path="/search/" element={<SearchPage />}>
          <Route path="/search/:type" element={<SearchList />} />
        </Route>
      </Route>
    </Routes>
  );
}
