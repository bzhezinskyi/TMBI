import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';

import { Container } from 'react-bootstrap';

export default function Layout() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
