import { Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const categories = [
  { name: "My Booking", path: "/my-bookings" },
  { name: "Movies", path: "/movies" },
  { name: "Events", path: "/events" },
  { name: "Plays", path: "/plays" },
  { name: "Sports", path: "/sports" },
  { name: "Activities", path: "/activities" },
  { name: "Musics", path: "/musics" },
];

const SecondaryHeader = () => {
  const location = useLocation();

  return (
    <div className="bg-white border-bottom shadow-sm sticky-top z-3">
      <Container fluid className="px-4 overflow-auto">
        <Nav className="fw-semibold py-2 flex-nowrap">
          {categories.map((cat) => (
            <Nav.Link
              key={cat.name}
              as={Link}
              to={cat.path}
              className={`text-dark mx-2 px-2 py-1 ${
                location.pathname === cat.path ? "border-bottom border-danger fw-bold" : ""
              }`}
              style={{ whiteSpace: "nowrap" }}
            >
              {cat.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </div>
  );
};

export default SecondaryHeader;
