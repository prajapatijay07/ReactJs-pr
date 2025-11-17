import { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleMovieAsync } from "../Services/actions/MovieActions";


import {
  FaStar,
  FaClock,
  FaFilm,
  FaGlobe,
  FaArrowLeft,
  FaTicketAlt,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movie, loading, errMSG } = useSelector((state) => state.movieReducer);
     const { user } = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (id) {
      dispatch(getSingleMovieAsync(id));
    }
  }, [id, dispatch]);

  const handleBook = () => navigate(`/book/${id}`);
  const handleBack = () => navigate("/");
  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user])

  // Loading state
  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading movie details...</p>
      </Container>
    );
  }

  // Error state
  if (errMSG) {
    return (
      <Container className="text-center mt-5 text-danger">
        <h4>Oops! Something went wrong.</h4>
        <p>{errMSG}</p>
        <Button variant="secondary" onClick={handleBack}>
          <FaArrowLeft className="me-2" />
          Back to Home
        </Button>
      </Container>
    );
  }

  // Not found state
  if (!movie || Object.keys(movie).length === 0) {
    return (
      <Container className="text-center mt-5 text-warning">
        <h4>Movie not found</h4>
        <p>The movie you’re looking for does not exist.</p>
        <Button variant="secondary" onClick={handleBack}>
          <FaArrowLeft className="me-2" />
          Back to Home
        </Button>
      </Container>
    );
  }

  // UI when movie is available
  return (
    <section style={{ backgroundColor: "#f5f5f5", padding: "60px 0" }}>
      <Container>
        <Row className="align-items-center g-5">
          {/* Left: Movie Poster */}
          <Col md={4} className="text-center">
            <Card className="shadow border-0">
              <Card.Img
                variant="top"
                src={movie.image || "https://via.placeholder.com/400x600?text=No+Image"}
                alt={movie.title || "Movie Poster"}
                style={{ height: "500px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text className="text-muted">🎬 Now In Cinemas</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: Movie Details */}
          <Col md={8}>
            <h1 className="fw-bold mb-3">{movie.title || "Untitled Movie"}</h1>

            {/* Rating */}
            <div className="d-flex align-items-center gap-2 mb-3">
              <FaStar className="text-warning fs-4" />
              <span className="fs-5 fw-semibold">
                {movie.rating || "N/A"}/10
              </span>
              <span className="text-muted">({movie.votes || 0} votes)</span>
            </div>

            {/* Badges */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              <Badge bg="dark" className="px-3 py-2">
                <FaFilm className="me-2" />
                {movie.format || "2D"}
              </Badge>
              <Badge bg="info" text="dark" className="px-3 py-2">
                <FaGlobe className="me-2" />
                {movie.language || "N/A"}
              </Badge>
              <Badge bg="warning" text="dark" className="px-3 py-2">
                <FaFilm className="me-2" />
                {movie.genre || "Genre"}
              </Badge>
              <Badge bg="secondary" className="px-3 py-2">
                <FaClock className="me-2" />
                {movie.duration || "N/A"}
              </Badge>
            </div>

            {/* Release Date */}
            <p className="text-muted mb-2">
              <FaCalendarAlt className="me-2" />
              <strong>Release Date:</strong>{" "}
              {movie.releaseDate
                ? new Date(movie.releaseDate).toLocaleDateString(undefined, {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "N/A"}
            </p>

            {/* Description */}
            <p className="text-muted">
              <FaInfoCircle className="me-2" />
              <strong>Description:</strong>{" "}
              {movie.desc || "No description available."}
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Button variant="danger" size="lg" onClick={handleBook}>
                <FaTicketAlt className="me-2" />
                Book Tickets
              </Button>
              <Button variant="outline-secondary" size="lg" onClick={handleBack}>
                <FaArrowLeft className="me-2" />
                Back to Home
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MovieDetails;
