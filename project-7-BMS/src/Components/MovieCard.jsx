import { Card, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ movie, onDelete }) => {
  // Add Movie to cart
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isAlreadyInCart = cart.find(item => item?.id === movie?.id);

    if (!isAlreadyInCart) {
      cart.push(movie);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${movie?.title || 'Movie'} added to cart!`);
    } else {
      alert('Already in cart!');
    }
  };

  return (
    <Card className="h-100 shadow-sm movie-card">
      {/* Movie Image */}
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={movie?.image || '/placeholder-image.jpg'} 
          alt={movie?.title || 'Movie'}
          style={{ height: '400px', objectFit: 'cover', width: '100%' }}
        />

        {/* Action Buttons (View, Edit, Delete) */}
        <div className="position-absolute top-0 end-0 m-2 d-flex">
          <Link
            to={`/movies/${movie?.id}`}
            className="btn btn-sm btn-light rounded-circle me-2 shadow-sm"
            title="View Details"
          >
            <FiEye size={16} />
          </Link>
          <Link
            to={`/movies/${movie?.id}/edit`}
            className="btn btn-sm btn-light rounded-circle me-2 shadow-sm"
            title="Edit Movie"
          >
            <FiEdit size={16} />
          </Link>
          <Button
            variant="danger"
            size="sm"
            className="rounded-circle shadow-sm"
            onClick={() => onDelete(movie?.id)}
            title="Delete Movie"
          >
            <FiTrash2 size={16} />
          </Button>
        </div>
      </div>

      {/* Movie Details */}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">
          {movie?.title || 'Untitled Movie'}
        </Card.Title>

        {/* Rating & Genre */}
        <div className="d-flex align-items-center mb-2">
          <FaStar className="text-warning me-1" />
          <span className="text-muted">{movie?.rating || 0}/10</span>
          <span className="mx-2 text-muted">•</span>
          <span className="text-muted">
            {movie?.genre ? movie.genre.split(',')[0] : 'Unknown'}
          </span>
        </div>

        {/* Description */}
        <Card.Text className="text-truncate mb-3" style={{ maxHeight: '60px' }}>
          {movie?.description || 'No description available.'}
        </Card.Text>

        {/* Price & Book Button */}
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h5 mb-0 text-primary">
            ₹{movie?.price || 250}
          </span>
          <Button 
            variant="outline-dark" 
            size="sm" 
            onClick={handleAddToCart}
          >
            Book Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
