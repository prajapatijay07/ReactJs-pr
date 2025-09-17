import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaMapMarkerAlt, FaEnvelope, FaHeart, FaFilm  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#333',
        color: '#fff',
        paddingTop: '40px',
        paddingBottom: '20px',
        fontSize: '0.95rem',
      }}
    >
      <Container>
        {/* Footer Top Section */}
        <Row className="mb-4">
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5 style={{ fontWeight: 'bold' }}>BookMyShow</h5>
            <p>
              BookMyShow is India's largest online ticketing platform for movies, events, plays, and sports.
            </p>
            <div className="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white">
                <FaYoutube size={20} />
              </a>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-3">
            <h5 style={{ fontWeight: 'bold' }}>Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { text: 'Home', link: '/' },
                { text: 'Movies', link: '/movies' },
                { text: 'Cinemas', link: '/cinemas' },
                { text: 'Add Movie', link: '/add-movie' },
              ].map((item, idx) => (
                <li key={idx} className="mb-1">
                  <Link
                    to={item.link}
                    style={{
                      textDecoration: 'none',
                      color: '#ccc',
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#f84464')}
                    onMouseLeave={(e) => (e.target.style.color = '#ccc')}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5 style={{ fontWeight: 'bold' }}>Contact</h5>
            <address style={{ color: '#ccc', lineHeight: '1.6' }}>
              <div>
                <FaMapMarkerAlt className="me-2" /> Fun Republic Lane, Andheri West, Mumbai, Maharashtra 400053
              </div>
              <div>
                <FaPhone className="me-2" /> +91 98765 43210
              </div>
              <div>
                <FaEnvelope className="me-2" /> support@bookmyshow.com
              </div>
            </address>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
      <Row>
  <Col className="text-center pt-3 border-top border-secondary">
    <p className="mb-0" style={{ color: '#fff' }}>
      &copy; 2025 BookMyShow. Made with <FaHeart className="mx-1 text-danger" /> and <FaFilm className="mx-1 text-danger" />. All rights reserved.
    </p>
  </Col>
</Row>
      </Container>
    </footer>
  );
};

export default Footer;
