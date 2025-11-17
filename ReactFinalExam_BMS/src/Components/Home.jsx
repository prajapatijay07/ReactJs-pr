import { useEffect } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMovieAsync, getAllMoviesAsync } from "../Services/actions/MovieActions";
import { FaTicketAlt, FaEye, FaEdit, FaTrash, FaFilm } from "react-icons/fa";
import MovieCarousel from "./MovieCarousel";
import CategoryCards from "./Cards";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, loading, errMSG } = useSelector((state) => state.movieReducer);
  const { user } = useSelector((state) => state.userReducer)

  useEffect(() => {
    dispatch(getAllMoviesAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user])

  const handleEdit = (id) => navigate(`/edit-movie/${id}`);
  const handleDelete = (id) =>
    window.confirm("Are you sure you want to delete this movie?") && dispatch(deleteMovieAsync(id));
  const handleView = (id) => navigate(`/movie/${id}`);
  const handleBook = (id) => navigate(`/book/${id}`);

  return (
    <Container className="mt-4">
      {/* Top Carousel */}
      <MovieCarousel />

      {/* Title */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2 className="text-danger">
          <FaFilm className="me-2" /> Now Showing
        </h2>
      </div>

      {/* Content Area */}
      {loading ? (
        <Spinner animation="border" className="d-block mx-auto" />
      ) : errMSG ? (
        <p className="text-danger text-center">{errMSG}</p>
      ) : movies.length === 0 ? (
        <div className="text-center">
          <p>No movies available. Add one?</p>
          <Button variant="primary" onClick={() => navigate("/add-movie")}>
            Add Movie
          </Button>
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {movies.map((movie) => (
            <Col key={movie.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={movie.image || "https://placehold.co/200x300.png?text=No+Image"}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold text-center text-dark">{movie.title}</Card.Title>

                  <Card.Text className="text-muted text-center" style={{ fontSize: "14px" }}>
                    {movie.genre} • {movie.language}
                  </Card.Text>

                  <Card.Text className="text-success fw-semibold text-center mb-3">
                    ₹{movie.price}
                  </Card.Text>

                  <div className="d-grid gap-2 mt-auto">
                    <Button variant="primary" size="sm" onClick={() => handleBook(movie.id)}>
                      <FaTicketAlt className="me-2" /> Book Now
                    </Button>

                    <Button variant="outline-secondary" size="sm" onClick={() => handleView(movie.id)}>
                      <FaEye className="me-2" /> View Details
                    </Button>

                    <div className="d-flex gap-2">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEdit(movie.id)}
                        className="flex-grow-1"
                      >
                        <FaEdit className="me-1" /> Edit
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(movie.id)}
                        className="flex-grow-1"
                      >
                        <FaTrash className="me-1" /> Delete
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {/* Category Cards Below */}
      <CategoryCards />
      
    </Container>
  );
};

export default Home;
