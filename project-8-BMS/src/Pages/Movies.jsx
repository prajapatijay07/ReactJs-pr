import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Pagination,
  Form,
  Button
} from 'react-bootstrap';
import MovieCard from '../Components/MovieCard';
import { Link, useLocation } from 'react-router-dom';
import {
  FaFilm,
  FaStar,
  FaLanguage,
  FaSearch,
  FaTrashAlt
} from 'react-icons/fa';
import { MdMovieCreation } from 'react-icons/md';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    genre: '',
    language: '',
    rating: ''
  });
  const [sortOption, setSortOption] = useState('');

  const itemsPerPage = 8;
  const location = useLocation();
  const searchParam =
    new URLSearchParams(location.search).get('search')?.toLowerCase() || '';

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(saved);
  }, []);

  useEffect(() => {
    let result = [...movies];

    // Search
    result = result.filter(
      (movie) =>
        movie.title.toLowerCase().includes(searchParam) ||
        movie.description.toLowerCase().includes(searchParam) ||
        movie.genre.toLowerCase().includes(searchParam)
    );

    // Filters
    if (filters.genre) {
      result = result.filter((movie) => movie.genre.includes(filters.genre));
    }
    if (filters.language) {
      result = result.filter((movie) => movie.language === filters.language);
    }
    if (filters.rating) {
      result = result.filter(
        (movie) => movie.rating >= parseFloat(filters.rating)
      );
    }

    // Sorting
    if (sortOption === 'title-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'title-desc') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === 'rating-high') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'rating-low') {
      result.sort((a, b) => a.rating - b.rating);
    }

    setFilteredMovies(result);
    setCurrentPage(1);
  }, [movies, searchParam, filters, sortOption]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      const updated = movies.filter((movie) => movie.id !== id);
      setMovies(updated);
      localStorage.setItem('movies', JSON.stringify(updated));
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () =>
    setFilters({ genre: '', language: '', rating: '' });

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPagination = () => {
    const items = [];
    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return <Pagination className="justify-content-center mt-4">{items}</Pagination>;
  };

  const languages = ['Hindi', 'English', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Other'];
  const genres = ['Action', 'Comedy', 'Drama', 'Thriller', 'Romance', 'Sci-Fi', 'Horror', 'Adventure'];

  return (
    <Container className="my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="mb-2 mt-5">
          <FaFilm className="me-2 text-danger" />
          Now Showing
        </h2>
        <Link to="/add-movie" className="btn btn-primary mb-2 mt-5">
          <MdMovieCreation className="me-1" />
          Add Movie
        </Link>
      </div>

      {/* Filters and Sorting */}
      <Row className="mb-4 g-2">
        <Col md={2}>
          <Form.Select name="genre" value={filters.genre} onChange={handleFilterChange}>
            <option value="">All Genres</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>{genre}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select name="language" value={filters.language} onChange={handleFilterChange}>
            <option value="">All Languages</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={2}>
          <Form.Select name="rating" value={filters.rating} onChange={handleFilterChange}>
            <option value="">Any Rating</option>
            <option value="9">9+ Stars</option>
            <option value="8">8+ Stars</option>
            <option value="7">7+ Stars</option>
            <option value="6">6+ Stars</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort By</option>
            <option value="title-asc">Title A-Z</option>
            <option value="title-desc">Title Z-A</option>
            <option value="rating-high">Rating High to Low</option>
            <option value="rating-low">Rating Low to High</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Button variant="outline-secondary" onClick={clearFilters} className="w-100">
            <FaTrashAlt className="me-1" />
            Clear Filters
          </Button>
        </Col>
      </Row>

      {/* Movie List */}
      {filteredMovies.length === 0 ? (
        <div className="text-center py-5">
          <h4>
            No movies found <FaSearch />
          </h4>
          <Link to="/add-movie" className="btn btn-primary mt-3">
            Add Your First Movie
          </Link>
        </div>
      ) : (
        <>
          <Row className="g-4">
            {paginatedMovies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} onDelete={handleDelete} />
              </Col>
            ))}
          </Row>
          {totalPages > 1 && renderPagination()}
        </>
      )}
    </Container>
  );
};

export default Movies;
