import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Badge,
  Button,
} from "react-bootstrap";
import {
  FaTicketAlt,
  FaUser,
  FaTrash,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const fallbackImage = "https://dummyimage.com/200x300/cccccc/000000&text=No+Image";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate ();  
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updated = bookings.filter((_, i) => i !== indexToDelete);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const getImageSrc = (image) => {
    if (!image) return fallbackImage;
    if (image.startsWith("http") || image.startsWith("data:")) return image;
    return `${window.location.origin}/${image}`;
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">🎟️ My Movie Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings found. Book a movie to see it here.</p>
      ) : (
        <Row xs={1} md={2} lg={2} className="g-4">
          {bookings.map((booking, index) => (
            <Col key={index}>
              <Card className="shadow-sm h-100">
                <Row className="g-0">
                  <Col md={4}>
                    <Card.Img
                      src={getImageSrc(booking.image)}
                      alt={booking.movieTitle}
                      style={{ height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = fallbackImage;
                      }}
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{booking.movieTitle}</Card.Title>
                      <p><FaUser className="me-2" /> {booking.name}</p>
                      <p><FaTicketAlt className="me-2" /> Tickets: {booking.tickets}</p>
                      <p>Email: {booking.email}</p>
                      <p>Phone: {booking.phone}</p>
                      <Badge bg="success">🎉 Thank you for booking!</Badge>
                      <div className="text-end mt-3">
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(index)}
                        >
                          <FaTrash className="me-1" /> Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default MyBookings;
