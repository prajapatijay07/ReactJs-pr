import React from 'react';
import { Row, Col, Carousel, Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar, FaTicketAlt, FaFire } from 'react-icons/fa';

// Carousel Banners
import banner1 from '../assets/carousel1.jpg';
import banner2 from '../assets/carousel2.jpg';
import banner3 from '../assets/carousel3.jpg';

// Movie Posters
import posterWar2 from '../assets/war2.jpg';
import Narsimha from '../assets/Narstmha.jpg';
import posterSaiyaara from '../assets/saiyaara.jpg';
import posterCoolie from '../assets/coolie.jpg';

const Home = () => {
  const featuredMovies = [

    { id: 1, title: 'War 2', image: posterWar2, rating: 8.2, genre: 'Action, Thriller', language: 'Hindi' },
    { id: 2, title: 'Mahavatar Narsimha', image: Narsimha, rating: 9.6, genre: 'Action, Animation', language: 'Hindi' },
    { id: 3, title: 'Saiyaara', image: posterSaiyaara, rating: 7.8, genre: 'Romance, Drama', language: 'Hindi' },
    { id: 4, title: 'Coolie: The Powerhouse', image: posterCoolie, rating: 8.5, genre: 'Action, Drama', language: 'Hindi' },
  ];

  const handleAddToCart = (movie) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(movie);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="p-3 mt-5 pt-5">
      {/* Carousel */}
      <Carousel fade interval={3000} className="mb-5 rounded shadow-sm overflow-hidden">
        {[banner1, banner2, banner3].map((img, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={img}
              alt={`Banner ${idx + 1}`}
              style={{
                height: '450px',
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Featured Movies */}

      <h2 className="mb-4 text-center">
        <FaFire className="text-danger me-2" /> Now Showing
      </h2>
      <Row className="mb-5">
        {featuredMovies.map((movie) => (
          <Col md={3} key={movie.id} className="mb-4">
            <Link
              to={`/featured/${movie.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
         

              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={movie.image}
                  style={{ height: '550px', objectFit: 'cover', width: '100%' }}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-warning">
                      <FaStar className="me-1" /> {movie.rating}/10
                    </span>
                    <span className="badge bg-primary">{movie.language}</span>
                  </div>
                  <Card.Text className="text-muted small">{movie.genre}</Card.Text>
                  <Button
                    variant="danger"
                    className="w-100"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(movie);
                    }}
                  >
                    <FaTicketAlt className="me-2" /> Add Ticket
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}

      </Row>

      {/* Why Choose Us */}
      <div
        className="text-center p-5 mb-5 rounded shadow-sm"
        style={{ backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}
      >
        <h2 className="text-danger mb-3 fw-bold">Why Choose BookMyShow?</h2>
        <p className="text-dark mx-auto" style={{ maxWidth: '700px', fontSize: '1.1rem' }}>
          We offer the widest selection of movies, events, and plays. With secure payment options,
          instant confirmations, and the best customer service, your entertainment is our priority.
        </p>
        <Button as={Link} to="/movies" variant="danger" className="fw-bold px-4 py-2 mt-3">
          Explore Movies
        </Button>
      </div>
    </div>
  );
};

export default Home;
