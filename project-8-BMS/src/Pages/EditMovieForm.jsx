import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';

const EditMovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const found = savedMovies.find((m) => String(m.id) === String(id));
    if (found) {
      setMovie(found);
    } else {
      navigate('/movies');
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = {
      ...movie,
      price: parseFloat(movie.price) || 0,
      rating: parseFloat(movie.rating) || 0,
    };

    const savedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const updatedList = savedMovies.map((m) =>
      String(m.id) === String(updated.id) ? updated : m
    );
    localStorage.setItem('movies', JSON.stringify(updatedList));

    navigate('/movies');
  };

  if (!movie) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <Container className="my-5">
      <h3 className="mb-4 text-center text-primary pt-3">Edit Movie</h3>

      {/* Image Preview */}
      {movie.image && (
        <div className="text-center mb-3">
          <img
            src={movie.image}
            onError={(e) =>
              (e.target.src = 'https://via.placeholder.com/300x450?text=No+Image')
            }
            alt="Preview"
            className="img-thumbnail"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>
      )}

      <Form onSubmit={handleSubmit} className="p-4 rounded shadow bg-light">
        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="title" label="Movie Title">
              <Form.Control
                type="text"
                name="title"
                value={movie.title || ''}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="price" label="Ticket Price">
              <Form.Control
                type="number"
                name="price"
                value={movie.price || ''}
                onChange={handleChange}
                required
                step="1"
                min="0"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="description" label="Description" className="mb-3">
          <Form.Control
            as="textarea"
            name="description"
            value={movie.description || ''}
            onChange={handleChange}
            style={{ height: '100px' }}
            required
          />
        </FloatingLabel>

        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="genre" label="Genre (comma-separated)">
              <Form.Control
                type="text"
                name="genre"
                value={movie.genre || ''}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="duration" label="Duration">
              <Form.Control
                type="text"
                name="duration"
                value={movie.duration || ''}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="language" label="Language">
              <Form.Select
                name="language"
                value={movie.language || 'Hindi'}
                onChange={handleChange}
                required
              >
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Kannada">Kannada</option>
                <option value="Other">Other</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="rating" label="Rating (0-10)">
              <Form.Control
                type="number"
                name="rating"
                value={movie.rating || ''}
                onChange={handleChange}
                required
                step="0.1"
                min="0"
                max="10"
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="director" label="Director">
              <Form.Control
                type="text"
                name="director"
                value={movie.director || ''}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="cast" label="Cast (comma-separated)">
              <Form.Control
                type="text"
                name="cast"
                value={movie.cast || ''}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <FloatingLabel controlId="releaseDate" label="Release Date">
              <Form.Control
                type="date"
                name="releaseDate"
                value={movie.releaseDate || ''}
                onChange={handleChange}
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="tags" label="Tags (comma-separated)">
              <Form.Control
                type="text"
                name="tags"
                value={movie.tags || ''}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Col>
        </Row>

        <FloatingLabel controlId="image" label="Poster Image URL" className="mb-3">
          <Form.Control
            type="url"
            name="image"
            value={movie.image || ''}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <div className="text-center">
          <Button type="submit" variant="warning" size="lg" className="me-2">
            Update Movie
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/movies')}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditMovieForm;
