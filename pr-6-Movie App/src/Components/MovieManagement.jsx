import { Container, Carousel, Row, Col, Card } from "react-bootstrap";

const slides = [
  {
    title: "Organize & Manage Easily",
    text: "Edit, delete, and categorize — all stored securely in your browser.",
    img: "https://sun6-22.userapi.com/impf/_XWV1Ow3XAmgIZ3tsCVJIMw1TdCXekl99xCkrA/xfoMy1fO4PE.jpg?size=1920x768&quality=95&crop=0,19,1280,511&sign=ed401a576c9f220244e47858e7253e42&type=cover_group"
  },
  {
    title: "Build Your Movie Collection",
    text: "Save your favorite films with ratings, notes, and genres.",
    img: "https://t3.ftcdn.net/jpg/05/62/25/26/360_F_562252610_Watb1rsYXzmDnCDqxA2CFEsS72o8D05E.jpg" 
  },
  {
    title: "Discover & Learn",
    text: "Find hidden gems and learn React patterns along the way.",
    img: "https://avatars.mds.yandex.net/i?id=aa9cd2713dc374fc3eb4647a08b68f0726678095-13089762-images-thumbs&n=13" 
  },
];


const MovieManagement = () => {
  return (
    <Container className="py-4">
      <Carousel fade className="mb-5 rounded-3 overflow-hidden">
        {slides.map((s, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={s.img}
              alt={`slide${i}`}
              style={{
                height: "420px",
                objectFit: "cover",
                filter: "brightness(0.8) contrast(1.1)",
              }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-75 p-3 rounded-3">
              <h3 style={{ fontWeight: "bold", color: "var(--button-purple)" }}>{s.title}</h3>
              <p>{s.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="text-center mb-4 fw-bold" style={{ color: "var(--button-purple)" }}>
        Why build Movie Collector?
      </h2>

      <Row className="mb-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="shadow-sm">
            <Card.Body>
              <p>
                A Movie Collector app provides film lovers with an easy way to track,
                manage, and explore their favorite movies. You can store details
                like titles, genres, release years, and personal ratings — all in
                one convenient place.
              </p>
              <p>
                With features to categorize, search, and discover new films, the
                app creates a personalized movie library that saves time and keeps
                everything organized. It's like having your own private cinema
                database — always ready when you need it.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieManagement;