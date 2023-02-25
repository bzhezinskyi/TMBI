import { useState } from 'react';
import { Accordion, Button, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function MediaFilter({ options }) {
  const { mediaType } = useParams();

  const [sorting, setSorting] = useState('Популярні');
  const [filter, setFilter] = useState('trending/movie/week');

  const handleSubmit = () => {
    return options(filter);
  };

  return (
    <>
      <h4>Популярні</h4>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Сортування</Accordion.Header>
          <Accordion.Body>
            <p>Сортувати результати за</p>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">{sorting}</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setSorting('Популярні');
                    setFilter(`trending/${mediaType}/week`);
                  }}
                >
                  Популярні
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSorting('Високий рейтигн');
                    setFilter(`${mediaType}/top_rated`);
                  }}
                >
                  Високий рейтигн
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="d-grid gap-2 pt-3">
        <Button onClick={handleSubmit} type="button" variant="success">
          Шукати
        </Button>
      </div>
    </>
  );
}
