import SearchForm from 'components/SearchForm';
import SearchAppBar from 'components/SearchPage/SearchAppBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom/dist';

export default function SearchPage() {
  return (
    <>
      <Container className="pt-4">
        <Row>
          <Col md="auto">
            <SearchAppBar />
          </Col>
          <Col>
            <SearchForm />
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}
