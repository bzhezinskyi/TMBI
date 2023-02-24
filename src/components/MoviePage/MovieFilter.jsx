import { useState } from 'react';
import { Accordion, Button, Dropdown } from 'react-bootstrap';

export default function MovieFilter() {
  const [sorting, setSorting] = useState('trending');
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
                <Dropdown.Item onClick={() => setSorting('trending')}>
                  Популярні
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting('Непопулярні')}>
                  Непопулярні
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting('Високий рейтигн')}>
                  Високий руйтигн
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSorting('Низький рейтигн')}>
                  Низький руйтигн
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="d-grid gap-2 pt-3">
        <Button variant="success">Шукати</Button>
      </div>
    </>
  );
}
