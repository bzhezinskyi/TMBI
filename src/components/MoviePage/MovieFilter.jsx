import { useState } from 'react';
import { Accordion, Button, Dropdown } from 'react-bootstrap';

export default function MovieFilter() {
  const [sorting, setSorting] = useState('Популярні');
  const [filterSorting, setFilterSorting] = useState('trending');

  const handleSubmit = () => {
    console.log('filterSorting:', filterSorting);
    return filterSorting;
  };

  return (
    <>
      <h4>Популярні фільми</h4>
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
                    setFilterSorting('trending');
                  }}
                >
                  Популярні
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setSorting('Високий рейтигн');
                    setFilterSorting('top_rated');
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
