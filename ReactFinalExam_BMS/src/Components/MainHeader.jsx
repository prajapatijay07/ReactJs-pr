import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Form,
  Dropdown,
  Button,
  Image,
  Offcanvas,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import Menu from "./Menu";
import logo from "../assets/logo.png";
import { logOutAsync } from "../Services/actions/userActions";

const MainHeader = () => {
  const [location, setLocation] = useState("Select City");
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);
  const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Hyderabad"];

  useEffect(() => {
    const savedLocation = localStorage.getItem("selectedCity");
    if (savedLocation) setLocation(savedLocation);

    const savedUser = localStorage.getItem("user");
    if (savedUser && !user) {
      dispatch({
        type: "SIGN_IN",
        payload: JSON.parse(savedUser),
      });
    }
  }, [dispatch, user]);

  const handleCityChange = (city) => {
    setLocation(city);
    localStorage.setItem("selectedCity", city);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) alert("Search: " + search);
  };

  const handleLogOut = () => {
    dispatch(logOutAsync());
  };

  return (
    <>
      <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm py-2">
        <Container fluid className="px-3 px-lg-4">
          <Navbar.Brand as={Link} to="/">
            <Image src={logo} alt="Logo" height="32" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            {/* Search Bar */}
            <Form
              className="d-flex mx-lg-4 my-2 my-lg-0 flex-grow-1"
              onSubmit={handleSearch}
            >
              <Form.Control
                type="search"
                placeholder="Search for Movies, Events, Plays and more"
                className="rounded-pill"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>

            {/* Right Side Controls */}
            <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">

              {/* City Selection */}
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-dark"
                  size="sm"
                  className="rounded-pill"
                >
                  📍 {location}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {cities.map((city) => (
                    <Dropdown.Item
                      key={city}
                      onClick={() => handleCityChange(city)}
                    >
                      {city}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              {/* Conditionally Render Add Movie */}
              {user && (
                <Button
                  as={Link}
                  to="/add-movie"
                  variant="success"
                  className="rounded-pill px-2"
                >
                  <FaPlus className="me-1" />
                  Add Movie
                </Button>
              )}

              {/* Conditionally Render Login/Logout */}
              {!user ? (
                <Button
                  as={Link}
                  to="/signin"
                  variant="danger"
                  className="rounded-pill px-4"
                >
                  Sign In
                </Button>
              ) : (
                <div className="d-flex align-items-center gap-2">
                  <span>{user.email}</span>
                  <Button
                    onClick={handleLogOut}
                    variant="outline-secondary"
                    size="sm"
                  >
                    Logout
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <FiMenu
                className="d-lg-none"
                size={24}
                onClick={() => setShowMenu(true)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for Mobile */}
      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Menu handleClose={() => setShowMenu(false)} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MainHeader;
