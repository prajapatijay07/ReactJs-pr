import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";

const Layout = ({ children }) => (
  <>
    <Navbar expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <img
            src={logo}
            alt="Movie Collector Logo"
            style={{ height: "32px", width: "32px", objectFit: "contain" }}
          />
          <span style={{ fontWeight: 700 }}>Movie Collector</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/directors">Directors</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {children}

    <footer className="py-4 mt-5">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} Movie Collector</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-end">
              {["Privacy", "Terms", "Help"].map((label, i) => (
                <Nav.Link key={i} href="#" className="px-2">{label}</Nav.Link>
              ))}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
);

export default Layout;
