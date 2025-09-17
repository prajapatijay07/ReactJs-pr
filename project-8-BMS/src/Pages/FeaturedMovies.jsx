import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Pagination
} from 'react-bootstrap';
import { FaFilm, FaCouch, FaCoffee, FaVolumeUp, FaTicketAlt, FaTheaterMasks } from 'react-icons/fa';

// Cinema banners
import cinema1 from '../assets/coolie.jpg';
import cinema2 from '../assets/saiyaara.jpg';
import cinema3 from '../assets/war2.jpg';
import cinema4 from '../assets/Narstmha.jpg';

// Cinema Data
const cinemas = [
  { 
    id: 1, 
    name: 'PVR Cinemas: Phoenix Marketcity', 
    image: cinema1, 
    address: 'Kurla, Mumbai', 
    amenities: ['4K Projection', 'Dolby Atmos', 'Recliner Seats'],
    price: 250
  },
  { 
    id: 2, 
    name: 'INOX: R City Mall', 
    image: cinema2, 
    address: 'Ghatkopar, Mumbai', 
    amenities: ['3D Screens', 'Food Court', 'Online Booking'],
    price: 200
  },
  { 
    id: 3, 
    name: 'Cinepolis: Seawoods Grand Central', 
    image: cinema3, 
    address: 'Navi Mumbai', 
    amenities: ['IMAX', 'Luxury Loungers', 'Cafe'],
    price: 300
  },
  { 
    id: 4, 
    name: 'Carnival Cinemas: Moviestar', 
    image: cinema4, 
    address: 'Andheri West, Mumbai', 
    amenities: ['Budget Friendly', 'Comfortable Seating', 'Snack Bar'],
    price: 180
  },
];

// Utility to get query params
const useQuery = () => new URLSearchParams(useLocation().search);

const FeaturedMovies = () => {
  const query = useQuery();
  const search = query.get('search')?.toLowerCase() || '';
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const result = cinemas.filter(
      (c) =>
        c.name.toLowerCase().includes(search) ||
        c.address.toLowerCase().includes(search)
    );
    setFiltered(result);
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedCinemas = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination className="justify-content-center mt-4">{items}</Pagination>;
  };

  // Map amenities to icons
  const renderAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case '4k projection':
      case '3d screens':
      case 'imax':
        return <FaFilm className="me-1" />;
      case 'dolby atmos':
        return <FaVolumeUp className="me-1" />;
      case 'recliner seats':
      case 'luxury loungers':
      case 'comfortable seating':
        return <FaCouch className="me-1" />;
      case 'food court':
      case 'snack bar':
      case 'cafe':
        return <FaCoffee className="me-1" />;
      case 'online booking':
      case 'budget friendly':
        return <FaTicketAlt className="me-1" />;
      default:
        return <FaFilm className="me-1" />;
    }
  };

  // Add to cart function
  const handleAddToCart = (movie) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isAlready = cart.find(item => item.id === movie.id);
    if (!isAlready) {
      cart.push(movie);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${movie.name} added to cart!`);
    } else {
      alert('Already in cart');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4 mt-5 text-dark">
        <FaTheaterMasks className="me-2 text-danger" />
        Cinemas Near You
      </h2>
      <p className="text-center text-muted mb-5">Discover the best movie experiences in your city!</p>

      <Row>
        {paginatedCinemas.length === 0 ? (
          <p className="text-center">No results found.</p>
        ) : (
          paginatedCinemas.map((cinema) => (
            <Col key={cinema.id} md={6} lg={4} xl={3} className="mb-4">
              <Card
                className="shadow-sm h-100"
                style={{
                  border: 'none',
                  borderRadius: '15px',
                  overflow: 'hidden',
                }}
              >
                {/* ✅ Proper image wrapper */}
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    backgroundColor: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={cinema.image}
                    alt={cinema.name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <Card.Body style={{ padding: '16px' }}>
                  <Card.Title
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      color: '#f84464',
                    }}
                  >
                    {cinema.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1rem' }}>
                    {cinema.address}
                  </Card.Text>
                  <div className="mb-3 d-flex flex-wrap">
                    {cinema.amenities.map((amenity, index) => (
                      <span
                        key={index}
                        className="badge bg-light text-dark me-1 mb-1 d-flex align-items-center"
                      >
                        {renderAmenityIcon(amenity)}
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h6 mb-0 text-primary">₹{cinema.price}</span>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleAddToCart(cinema)}
                    >
                      Book Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Pagination */}
      {paginatedCinemas.length > 0 && renderPagination()}
    </Container>
  );
};

export default FeaturedMovies;
