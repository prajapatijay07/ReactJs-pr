import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const directors = [
  { id: 1, name: "Christopher Nolan", knownFor: "Sci-Fi / Thriller", rating: 4.9 },
  { id: 2, name: "Greta Gerwig", knownFor: "Drama / Comedy", rating: 4.7 },
  { id: 3, name: "Bong Joon-ho", knownFor: "Dark Comedy / Drama", rating: 4.9 },
  { id: 4, name: "Satyajit Ray", knownFor: "Classic / Humanist", rating: 4.8 },
  { id: 5, name: "Hayao Miyazaki", knownFor: "Animation", rating: 4.95 },
  { id: 6, name: "Steven Spielberg", knownFor: "Blockbuster / Drama", rating: 4.85 },
];

const Directors = () => (
  <Container className="my-5">
    <h2 className="text-center fw-bold mb-4" style={{ color: "var(--button-purple)" }}>Featured Directors</h2>
    <Row>
      {directors.map((d) => (
        <Col key={d.id} sm={12} md={6} lg={4} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title className="fs-5">{d.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{d.knownFor}</Card.Subtitle>
              <Card.Text><strong>Rating:</strong> <Badge bg="warning" text="dark">{d.rating}</Badge></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Directors;