// Movies.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Collapse,
  Dropdown,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllMoviesAsync } from "../Services/actions/MovieActions";

const languageOptions = ["Hindi", "English", "Gujarati", "Tamil", "Telugu"];
const genreOptions = ["Action", "Comedy", "Thriller", "Romance", "Crime"];
const formatOptions = ["2D", "3D", "IMAX", "4DX"];
const cinemas = [
  "PVR Cinemas",
  "INOX",
  "Carnival Cinemas",
  "Miraj Cinemas",
  "Rajhans Cinemas",
  "City Gold",
  "Mukta A2 Cinemas",
];

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movies, loading, errMSG } = useSelector((state) => state.movieReducer);
  const { user } = useSelector((state) => state.userReducer);

  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [openLang, setOpenLang] = useState(true);
  const [showCinemas, setShowCinemas] = useState(false);

  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user, navigate]);

  useEffect(() => {
    dispatch(getAllMoviesAsync());
  }, [dispatch]);

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const clearFilter = (type) => {
    if (type === "language") setSelectedLanguages([]);
    if (type === "genre") setSelectedGenre(null);
    if (type === "format") setSelectedFormat(null);
    if (type === "cinema") setSelectedCinema(null);
  };

  // Filter movies dynamically
  const filteredMovies = movies.filter((movie) => {
    const langMatch =
      selectedLanguages.length === 0 || selectedLanguages.includes(movie.language);
    const genreMatch = !selectedGenre || movie.genre === selectedGenre;
    const formatMatch = !selectedFormat || movie.format === selectedFormat;
    const cinemaMatch = !selectedCinema || movie.cinema === selectedCinema;
    return langMatch && genreMatch && formatMatch && cinemaMatch;
  });

  return (
    <Container fluid className="my-5">
      <Row>
        <h5 className="fw-bold mb-4 text-dark"> Filters</h5>

        {/* Filters Column */}
        <Col md={3}>
          <div className="p-4 shadow-sm rounded" style={{ background: "#fff", color: "#000" }}>
            {/* Languages */}
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <span
                  className="fw-semibold"
                  style={{ cursor: "pointer" }}
                  onClick={() => setOpenLang(!openLang)}
                >
                  Languages
                </span>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none"
                  onClick={() => clearFilter("language")}
                >
                  Clear
                </Button>
              </div>
              <Collapse in={openLang}>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {languageOptions.map((lang) => (
                    <Button
                      key={lang}
                      size="sm"
                      variant={selectedLanguages.includes(lang) ? "danger" : "outline-dark"}
                      style={{ borderRadius: "20px", fontSize: "13px" }}
                      onClick={() => toggleLanguage(lang)}
                    >
                      {lang}
                    </Button>
                  ))}
                </div>
              </Collapse>
            </div>

            {/* Genres */}
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-semibold">Genres</span>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none"
                  onClick={() => clearFilter("genre")}
                >
                  Clear
                </Button>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" size="sm">
                  {selectedGenre || "Select Genre"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {genreOptions.map((genre) => (
                    <Dropdown.Item key={genre} onClick={() => setSelectedGenre(genre)}>
                      {genre}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Formats */}
            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="fw-semibold">Format</span>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none"
                  onClick={() => clearFilter("format")}
                >
                  Clear
                </Button>
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" size="sm">
                  {selectedFormat || "Select Format"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {formatOptions.map((format) => (
                    <Dropdown.Item key={format} onClick={() => setSelectedFormat(format)}>
                      {format}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>

            {/* Browse by Cinemas */}
            <Button
              variant="outline-danger"
              className="mb-3 w-100"
              onClick={() => setShowCinemas(!showCinemas)}
            >
              {showCinemas ? "Hide Cinemas" : "Browse by Cinemas"}
            </Button>

            <Collapse in={showCinemas}>
              <div>
                <ListGroup>
                  {cinemas.map((cinema) => (
                    <ListGroup.Item
                      key={cinema}
                      active={selectedCinema === cinema}
                      onClick={() =>
                        setSelectedCinema(selectedCinema === cinema ? null : cinema)
                      }
                      style={{
                        cursor: "pointer",
                        backgroundColor: selectedCinema === cinema ? "#d32f2f" : "#fff",
                        color: selectedCinema === cinema ? "#fff" : "#000",
                        border: "1px solid #ccc",
                      }}
                    >
                      {cinema}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                <Button
                  variant="link"
                  size="sm"
                  className="text-danger text-decoration-none mt-2"
                  onClick={() => clearFilter("cinema")}
                >
                  Clear Cinemas
                </Button>
              </div>
            </Collapse>
          </div>
        </Col>

        {/* Movies Cards */}
        <Col md={9}>
          {loading ? (
            <Spinner animation="border" className="d-block mx-auto" />
          ) : errMSG ? (
            <p className="text-danger text-center">{errMSG}</p>
          ) : filteredMovies.length === 0 ? (
            <p className="text-center text-muted mt-4">No movies found.</p>
          ) : (
            <Row xs={2} sm={2} md={3} lg={4} className="g-4">
              {filteredMovies.map((movie) => (
                <Col key={movie.id}>
                  <Card
                    className="h-100 border-0 shadow-sm"
                    style={{
                      cursor: "pointer",
                      borderRadius: "12px",
                      background: "#fff",
                      color: "#000",
                    }}
                    onClick={() => navigate(`/movie/${movie.id}`)}
                  >
                    <div style={{ position: "relative" }}>
                      <Card.Img
                        src={movie.image || "https://placehold.co/200x300.png?text=No+Image"}
                        alt={movie.title}
                        style={{ height: "260px", objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          background: "rgba(0,0,0,0.7)",
                          color: "#fff",
                          fontSize: "14px",
                          padding: "5px 10px",
                        }}
                      >
                        <FaStar color="#ffcc00" /> <strong>{movie.rating}</strong>
                        <span className="ms-2">{movie.votes}</span>
                      </div>
                    </div>
                    <Card.Body className="p-2">
                      <Card.Title
                        className="mb-1"
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {movie.title}
                      </Card.Title>
                      <Card.Text className="text-muted" style={{ fontSize: "13px" }}>
                        {movie.desc}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Movies;
