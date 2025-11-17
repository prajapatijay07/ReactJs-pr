import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 mt-5" style={{ fontFamily: "Arial, sans-serif" }}>
      <Container>
        <Row className="mb-4">
          {/* Logo & Description */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="text-uppercase mb-3" style={{ letterSpacing: "1px" }}>BookMyShow</h5>
            <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#cccccc" }}>
              Your one-stop destination for movies, events, plays, and more.
              Book tickets instantly and enjoy seamless entertainment experiences.
            </p>
            <div className="d-flex gap-3 mt-3">
              <FaFacebookF className="text-light fs-5" style={{ cursor: "pointer" }} />
              <FaTwitter className="text-light fs-5" style={{ cursor: "pointer" }} />
              <FaInstagram className="text-light fs-5" style={{ cursor: "pointer" }} />
              <FaYoutube className="text-light fs-5" style={{ cursor: "pointer" }} />
            </div>
          </Col>

          {/* Explore */}
          <Col md={2} sm={6} className="mb-4">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: "1px" }}>Explore</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px", color: "#bbbbbb", lineHeight: "2" }}>
              <li>Now Showing</li>
              <li>Coming Soon</li>
              <li>Events</li>
              <li>Plays</li>
              <li>Sports</li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={2} sm={6} className="mb-4">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: "1px" }}>Support</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px", color: "#bbbbbb", lineHeight: "2" }}>
              <li>FAQs</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Customer Care</li>
            </ul>
          </Col>

          {/* Newsletter */}
          <Col md={5} sm={12} className="mb-4">
            <h6 className="text-uppercase mb-3" style={{ letterSpacing: "1px" }}>Subscribe to our newsletter</h6>
            <Form className="d-flex" style={{ gap: "10px" }}>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                size="sm"
                style={{ backgroundColor: "#333", border: "1px solid #555", color: "white" }}
              />
              <Button size="sm" variant="danger">Subscribe</Button>
            </Form>
            <p className="mt-3" style={{ fontSize: "13px", color: "#aaa" }}>
              Get updates on latest movies, events, and exclusive offers.
            </p>
            {/* App links */}
            <div className="d-flex gap-3 mt-3">
              <Button variant="light" size="sm" className="d-flex align-items-center gap-2">
                <FaGooglePlay /> Google Play
              </Button>
              <Button variant="light" size="sm" className="d-flex align-items-center gap-2">
                <FaApple /> App Store
              </Button>
            </div>
          </Col>
        </Row>

        <hr className="bg-light" />

        {/* Contact and Copyright */}
        <Row className="pb-3">
          <Col md={6} style={{ fontSize: "13px", color: "#aaa" }}>
            <p className="mb-0">Email: support@bookmyshow.com</p>
            <p className="mb-0">Phone: +91 99999 99999</p>
            <p className="mb-0">Mumbai, India</p>
          </Col>
          <Col md={6} className="text-md-end text-center" style={{ fontSize: "13px", color: "#aaa" }}>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} BookMyShow Clone. Made with ❤️ by <strong>Dhruvi Gohil</strong>.
            </p>
            <p className="mb-0">All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
