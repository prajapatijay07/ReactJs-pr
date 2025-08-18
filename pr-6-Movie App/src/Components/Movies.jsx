import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import withLoading from "./withLoading";

const STORAGE_KEY = "movies_data";

const getStored = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

function MovieList({ movies, onEdit, onDelete }) {
  if (!movies || movies.length === 0) {
    return <p className="text-center text-muted">No movies found.</p>;
  }

  return (
    <Row>
      {movies.map((m) => (
        <Col key={m.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Body>
              <Card.Title>{m.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{m.genre} • {m.year}</Card.Subtitle>
              <Card.Text style={{ minHeight: "50px" }}>
                {m.description ? m.description.slice(0, 120) + (m.description.length>120? "..." : "") : "-"}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <small>⭐ {m.rating}/10</small>
                <div>
                  <Button size="sm" variant="outline-primary" className="me-2" onClick={() => onEdit(m.id)}>
                    <FaEdit /> Edit
                  </Button>
                  <Button size="sm" variant="outline-danger" onClick={() => onDelete(m.id)}>
                    <FaTrash /> Delete
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function MoviesInner() {
  const initial = {
    id: "",
    title: "",
    genre: "",
    year: "",
    rating: "",
    description: "",
  };

  const [form, setForm] = useState(initial);
  const [movies, setMovies] = useState(getStored());
  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const titleRef = useRef();

  useEffect(() => {
    const t = setTimeout(() => {
      setMovies(getStored());
      setLoading(false);
    }, 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "rating") {
      if (value === "" || /^[0-9]*$/.test(value)) {
        setForm((s) => ({ ...s, [name]: value }));
      }
    } else if (name === "year") {
      if (value === "" || /^[0-9]*$/.test(value)) {
        setForm((s) => ({ ...s, [name]: value }));
      }
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const validate = (data) => {
    const e = {};
    if (!data.title || data.title.trim().length < 2) e.title = "Title must be at least 2 characters.";
    if (!data.genre || data.genre.trim().length < 2) e.genre = "Genre must be at least 2 characters.";
    if (!data.year || Number(data.year) < 1888 || Number(data.year) > new Date().getFullYear()+1) e.year = "Enter valid year.";
    if (!data.rating) e.rating = "Rating required (1-10).";
    else if (Number(data.rating) < 1 || Number(data.rating) > 10) e.rating = "Rating must be between 1 and 10.";
    if (data.description && data.description.length > 500) e.description = "Description must be under 500 chars.";
    return e;
  };

  const resetForm = () => {
    setForm(initial);
    setErrors({});
    setIsEdit(false);
    if (titleRef.current) titleRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    if (isEdit) {
      setMovies((prev) => prev.map((m) => (m.id === form.id ? { ...form, id: form.id } : m)));
      resetForm();
    } else {
      const newMovie = { ...form, id: Date.now().toString() };
      setMovies((prev) => [...prev, newMovie]);
      resetForm();
    }
  };

  const handleEdit = (id) => {
    const selected = movies.find((m) => m.id === id);
    if (selected) {
      setForm(selected);
      setIsEdit(true);
      setTimeout(() => {
        if (titleRef.current) titleRef.current.focus();
      }, 0);
    }
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this movie?")) return;
    setMovies((prev) => prev.filter((m) => m.id !== id));
    if (isEdit && form.id === id) resetForm();
  };

  return (
    <Container className="mb-5">
      <h2 className="text-center mb-4 fw-bold" style={{ color: "var(--button-purple)" }}>
        {isEdit ? "Edit Movie" : "Add New Movie"}
      </h2>

      <Row className="mb-4">
        <Col md={{ span: 8, offset: 2 }}>
          <Card className="shadow border-0">
            <Card.Body>
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    ref={titleRef}
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Enter movie title"
                  />
                  {errors.title && <div className="text-danger small mt-1">{errors.title}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    name="genre"
                    value={form.genre}
                    onChange={handleChange}
                    placeholder="e.g. Drama, Action"
                  />
                  {errors.genre && <div className="text-danger small mt-1">{errors.genre}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    placeholder="Release year (e.g. 2023)"
                  />
                  {errors.year && <div className="text-danger small mt-1">{errors.year}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Rating (1-10)</Form.Label>
                  <Form.Control
                    name="rating"
                    value={form.rating}
                    onChange={handleChange}
                    placeholder="Enter rating"
                  />
                  {errors.rating && <div className="text-danger small mt-1">{errors.rating}</div>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description (optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    rows={3}
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Short note about the movie (max 500 chars)"
                  />
                  {errors.description && <div className="text-danger small mt-1">{errors.description}</div>}
                </Form.Group>

                <div className="d-flex gap-2">
                  <Button type="submit" variant={isEdit ? "warning" : "primary"} className="flex-grow-1">
                    {isEdit ? "Update Movie" : "Add Movie"}
                  </Button>
                  <Button variant="secondary" onClick={resetForm}>
                    Clear
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="text-center mb-4" style={{ color: "var(--accent-blue)" }}>Movie Records</h3>

      <Row>
        <Col>
          <MovieListWithLoading loading={loading} movies={movies} onEdit={handleEdit} onDelete={handleDelete} />
        </Col>
      </Row>
    </Container>
  );
}

const MovieListWithLoading = withLoading(MovieList);

export default MoviesInner;