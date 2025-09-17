import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Badge,
  ListGroup,
  Card,
} from 'react-bootstrap';
import { FaStar, FaClock, FaLanguage, FaUser } from 'react-icons/fa';
import { MdMovie, MdDateRange } from 'react-icons/md';
import { GiFilmSpool } from 'react-icons/gi';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const foundMovie = savedMovies.find(m => m.id === Number(id));
    setMovie(foundMovie || null);
  }, [id]);

  if (!movie) {
    return (
      <Container className="my-5 text-center">
        <h3 className="text-danger">
          Movie not found <MdMovie />
        </h3>
        <Link to="/movies" className="btn btn-outline-dark mt-3">
          Back to Movies
        </Link>
      </Container>
    );
  }

  return (
    <Container className="my-5 pt-5">
      <Row className="align-items-start">
        {/* Movie Poster */}
        <Col md={4} className="mb-4 mb-md-0 mt-4">
          <Card className="shadow-lg border-0 rounded">
            <Card.Img
              src={movie.image || '/placeholder-image.jpg'}
              alt={movie.title}
              style={{
                width: '100%',
                height: '550px',
                objectFit: 'cover',
              }}
            />
          </Card>
        </Col>

        {/* Movie Details */}
        <Col md={8}>
          <div className="ps-md-4 mt-4">
            <h1 className="fw-bold mb-3">{movie.title}</h1>

            {/* Badges */}
            <div className="d-flex align-items-center flex-wrap mb-3">
              <Badge bg="warning" text="dark" className="me-2 mb-2">
                <FaStar className="me-1" /> {movie.rating || 0}/10
              </Badge>
              <Badge bg="primary" className="me-2 mb-2">
                <FaLanguage className="me-1" /> {movie.language || 'N/A'}
              </Badge>
              <Badge bg="secondary" className="me-2 mb-2">
                <FaClock className="me-1" /> {movie.duration || 'N/A'}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
              {movie.description || 'No description available.'}
            </p>

            {/* Movie Info */}
            <ListGroup variant="flush" className="mb-4">
              <ListGroup.Item className="d-flex flex-wrap align-items-center">
                <GiFilmSpool className="me-2 text-primary" />
                <strong className="me-2">Genre:</strong>
                {movie.genre
                  ? movie.genre.split(',').map((g, idx) => (
                      <Badge
                        key={idx}
                        bg="info"
                        text="dark"
                        className="me-1 mb-1"
                      >
                        {g.trim()}
                      </Badge>
                    ))
                  : 'N/A'}
              </ListGroup.Item>

              <ListGroup.Item className="d-flex align-items-center">
                <FaUser className="me-2 text-success" />
                <strong className="me-2">Director:</strong>
                {movie.director || 'N/A'}
              </ListGroup.Item>

              <ListGroup.Item className="d-flex align-items-start">
                <FaUser className="me-2 text-warning" />
                <strong className="me-2">Cast:</strong>
                <span>{movie.cast || 'N/A'}</span>
              </ListGroup.Item>

              <ListGroup.Item className="d-flex align-items-center">
                <MdDateRange className="me-2 text-danger" />
                <strong className="me-2">Release Date:</strong>
                {movie.releaseDate || 'N/A'}
              </ListGroup.Item>
            </ListGroup>

            <Link to="/movies" className="btn btn-outline-dark mt-2">
              Back to Movies
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetail;
