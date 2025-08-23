import { useState } from 'react'
import { Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap'

const AddMovieForm = ({ onAddMovie }) => {
  const [movie, setMovie] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    genre: '',
    duration: '',
    language: 'English',
    director: '',
    cast: '',
    releaseDate: '',
    rating: '',
    tags: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setMovie(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddMovie({
      ...movie,
      id: Date.now(),
      price: parseFloat(movie.price),
      rating: parseFloat(movie.rating)
    })
    setMovie({
      title: '',
      price: '',
      description: '',
      image: '',
      genre: '',
      duration: '',
      language: 'English',
      director: '',
      cast: '',
      releaseDate: '',
      rating: '',
      tags: ''
    })
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4 p-4 rounded shadow bg-light">

      {/* Image Preview */}
      {movie.image && (
        <div className="text-center mb-3">
          <img
            src={movie.image}
            onError={(e) => (e.target.src = 'https://via.placeholder.com/300x450?text=No+Image')}
            alt="Preview"
            className="img-thumbnail"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        </div>
      )}

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="title" label="Movie Title" className="mb-3">
            <Form.Control
              type="text"
              name="title"
              value={movie.title}
              onChange={handleChange}
              required
              placeholder="Movie Title"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="price" label="Ticket Price" className="mb-3">
            <Form.Control
              type="number"
              name="price"
              value={movie.price}
              onChange={handleChange}
              required
              step="1"
              min="0"
              placeholder="Ticket Price"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel controlId="description" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          name="description"
          value={movie.description}
          onChange={handleChange}
          required
          style={{ height: '100px' }}
          placeholder="Description"
        />
      </FloatingLabel>

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="genre" label="Genre (comma-separated)" className="mb-3">
            <Form.Control
              type="text"
              name="genre"
              value={movie.genre}
              onChange={handleChange}
              required
              placeholder="e.g. Action, Drama, Comedy"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="duration" label="Duration" className="mb-3">
            <Form.Control
              type="text"
              name="duration"
              value={movie.duration}
              onChange={handleChange}
              required
              placeholder="e.g. 2h 30m"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="language" label="Language" className="mb-3">
            <Form.Select
              name="language"
              value={movie.language}
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
          <FloatingLabel controlId="rating" label="Rating (0-10)" className="mb-3">
            <Form.Control
              type="number"
              name="rating"
              value={movie.rating}
              onChange={handleChange}
              required
              step="0.1"
              min="0"
              max="10"
              placeholder="Rating"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="director" label="Director" className="mb-3">
            <Form.Control
              type="text"
              name="director"
              value={movie.director}
              onChange={handleChange}
              required
              placeholder="Director"
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="cast" label="Cast (comma-separated)" className="mb-3">
            <Form.Control
              type="text"
              name="cast"
              value={movie.cast}
              onChange={handleChange}
              required
              placeholder="e.g. Actor1, Actor2, Actor3"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          <FloatingLabel controlId="releaseDate" label="Release Date" className="mb-3">
            <Form.Control
              type="date"
              name="releaseDate"
              value={movie.releaseDate}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="tags" label="Tags (comma-separated)" className="mb-3">
            <Form.Control
              type="text"
              name="tags"
              value={movie.tags}
              onChange={handleChange}
              placeholder="e.g. blockbuster, award-winning"
            />
          </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel controlId="image" label="Poster Image URL" className="mb-3">
        <Form.Control
          type="url"
          name="image"
          value={movie.image}
          onChange={handleChange}
          required
          placeholder="Poster Image URL"
        />
      </FloatingLabel>

      <div className="text-center">
        <Button variant="dark" type="submit" size="lg">
          Add Movie
        </Button>
      </div>
    </Form>
  )
}

export default AddMovieForm