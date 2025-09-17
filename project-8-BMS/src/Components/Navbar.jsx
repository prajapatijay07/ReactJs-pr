import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import logo from '../assets/logo.png';

const CustomNavbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Update cart count on localStorage change
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(cart.length);
    };
    updateCart();
    window.addEventListener('storage', updateCart);
    return () => window.removeEventListener('storage', updateCart);
  }, []);

  // Load user info
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  // Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      navigate(`/movies?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
      setShowSearch(false);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: "#fff",
        padding: "12px 0",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold d-flex align-items-center">
          <img src={logo} alt="logo" height="40" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Navigation Links */}
          <Nav className="me-auto ms-3">
            <Nav.Link as={Link} to="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies" className="fw-semibold">Movies</Nav.Link>
            <Nav.Link as={Link} to="/cinemas" className="fw-semibold">Cinemas</Nav.Link>
            <Nav.Link as={Link} to="/add-movie" className="fw-semibold">Add Movie</Nav.Link>
          </Nav>

          {/* Search Bar */}
          {showSearch && (
            <Form className="d-flex me-3" onSubmit={handleSearchSubmit}>
              <Form.Control
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ borderRadius: '50px' }}
              />
            </Form>
          )}

          {/* Right Side Buttons */}
          <div className="d-flex align-items-center">
            {/* Search Toggle */}
            <Button
              variant="light"
              className="me-2 rounded-circle border-0 shadow-sm"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FiSearch size={18} color="#f84464" />
            </Button>

            {/* User Section */}
            {user ? (
              <>
                <span className="me-2 fw-semibold text-primary">Hi, {user.username}</span>
                <Button
                  variant="light"
                  className="me-2 rounded-circle border-0 shadow-sm"
                  onClick={handleLogout}
                >
                  <FiLogOut size={18} color="red" />
                </Button>
              </>
            ) : (
              <Button
                variant="light"
                className="me-2 rounded-circle border-0 shadow-sm"
                as={Link}
                to="/login"
              >
                <FiUser size={18} color="#f84464" />
              </Button>
            )}

            {/* Cart */}
            <div className="position-relative">
              <Button
                variant="light"
                className="me-2 rounded-circle border-0 shadow-sm"
                as={Link}
                to="/cart"
              >
                <FiShoppingCart size={18} color="#f84464" />
              </Button>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.6rem' }}
                >
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
