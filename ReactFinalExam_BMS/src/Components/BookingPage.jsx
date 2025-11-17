import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMovieAsync } from "../Services/actions/MovieActions";
import {
  FaTicketAlt,
  FaCalendarAlt,
  FaFilm,
  FaLanguage,
  FaClock,
  FaStar,
  FaMoneyBillWave,
  FaUser,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const BookingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movie } = useSelector((state) => state.movieReducer);
  const { user } = useSelector((state) => state.userReducer)

  const [tickets, setTickets] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    showTime: "",
  });

  useEffect(() => {
    if (id) dispatch(getSingleMovieAsync(id));
  }, [id, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user])

  const handleBooking = (e) => {
    e.preventDefault();
    if (!movie) return;

    const bookingDetails = {
      movieId: movie.id,
      movieTitle: movie.title,
      movieImage: movie.image,
      genre: movie.genre,
      duration: movie.duration,
      language: movie.language,
      rating: movie.rating,
      votes: movie.votes,
      releaseDate: movie.releaseDate,
      price: movie.price,
      tickets,
      totalAmount: movie.price * tickets,
      ...formData,
      bookingDate: new Date().toISOString(),
    };

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(bookingDetails);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    setBookingSuccess(true);
    setTimeout(() => navigate("/my-bookings"), 2500);
  };

  if (!movie || Object.keys(movie).length === 0) {
    return <div className="text-center mt-5">Loading movie...</div>;
  }

  return (
    <section
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "60px 0" }}
      className="d-flex align-items-center"
    >
      <Container>
        {bookingSuccess && (
          <Alert variant="success" className="text-center">
            Booking successful! Redirecting to your bookings...
          </Alert>
        )}

        <h1 className="text-center mb-5 text-primary fw-bold">
          <FaTicketAlt className="me-2" /> Book Tickets for {movie.title}
        </h1>

        <Row className="g-4 align-items-stretch">
          {/* Movie Info */}
          <Col xs={12} md={5} className="d-flex">
            <Card className="shadow border-0 flex-fill">
              <Card.Img
                variant="top"
                src={movie.image || "https://via.placeholder.com/400x600"}
                style={{ height: "450px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fw-bold fs-4 text-center">{movie.title}</Card.Title>
                <hr />
                <Card.Text as="div" className="text-muted">
                  <p><FaFilm className="me-2 text-secondary" /> <strong>Genre:</strong> {movie.genre}</p>
                  <p><FaClock className="me-2 text-secondary" /> <strong>Duration:</strong> {movie.duration}</p>
                  <p><FaLanguage className="me-2 text-secondary" /> <strong>Language:</strong> {movie.language}</p>
                  <p><FaStar className="me-2 text-warning" /> <strong>Rating:</strong> {movie.rating} ⭐ ({movie.votes} votes)</p>
                  <p><FaCalendarAlt className="me-2 text-secondary" /> <strong>Release:</strong> {movie.releaseDate}</p>
                  <p><FaMoneyBillWave className="me-2 text-success" /> <strong>Price:</strong> ₹{movie.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Booking Form */}
          <Col xs={12} md={7} className="d-flex">
            <Card className="shadow-lg border-0 flex-fill">
              <Card.Body>
                <h2 className="text-center mb-4 mt-5 text-success">🎬 Booking Details</h2>
                <Form onSubmit={handleBooking}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Number of Tickets</Form.Label>
                        <Form.Control
                          type="number"
                          min="1"
                          max="10"
                          value={tickets}
                          onChange={(e) => setTickets(parseInt(e.target.value) || 1)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Show Time</Form.Label>
                        <Form.Select
                          name="showTime"
                          value={formData.showTime}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Show Time</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="02:00 PM">02:00 PM</option>
                          <option value="06:00 PM">06:00 PM</option>
                          <option value="10:00 PM">10:00 PM</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Total Amount</Form.Label>
                    <Form.Control
                      type="text"
                      readOnly
                      value={`₹${movie.price * tickets}`}
                    />
                  </Form.Group>

                  <h5 className="mt-5 mb-5 text-center">👤 Personal Details</h5>

                  <Form.Group className="mb-3">
                    <Form.Label><FaUser className="me-2" /> Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label><FaEnvelope className="me-2" /> Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label><FaPhone className="me-2" /> Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="d-grid mt-4">
                    <Button type="submit" variant="primary" size="lg">
                      <FaTicketAlt className="me-2" /> Confirm Booking
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookingPage;
