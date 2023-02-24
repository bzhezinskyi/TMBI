import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom/dist';

export default function SearchForm() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleChange = evt => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    navigate(`/search/movie?query=${evt.target[0].value}`);
    setSearchValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Пошук фільмів, серіалів, людей..."
          aria-label="Пошук фільмів, серіалів, людей..."
          aria-describedby="basic-addon2"
          value={searchValue}
          onChange={handleChange}
        />
        <Button
          variant="outline-success"
          type="submit"
          id="button-addon2"
          disabled={searchValue === ''}
        >
          Пошук
        </Button>
      </InputGroup>
    </Form>
  );
}
