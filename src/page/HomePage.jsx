import SearchForm from 'components/HomePage/SearchForm';
import TrendingList from 'components/HomePage/TrendingList';

import { Container } from 'react-bootstrap';

export default function HomePage() {
  return (
    <>
      <Container>
        <h1>Ласкаво просимо.</h1>
        <h2>Мільйони фільмів, серіалів і людей. Досліджуйте зараз.</h2>
        <SearchForm />

        <TrendingList />
      </Container>
    </>
  );
}
