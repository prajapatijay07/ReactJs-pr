import { useState} from 'react'
import { Container, Alert } from 'react-bootstrap'
import AddMovieForm from '../Components/AddMovieForm'
import { Link } from 'react-router-dom'

const AddMovie = () => {
  const [showAlert, setShowAlert] = useState(false)

  const handleAddMovie = (newMovie) => {
    const savedMovies = JSON.parse(localStorage.getItem('movies')) || []
    const updatedMovies = [...savedMovies, newMovie]
    localStorage.setItem('movies', JSON.stringify(updatedMovies))
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className='mt-5'>Add New Movie</h2>
        <Link to="/movies" className="btn btn-outline-secondary mt-5">
          View Movies
        </Link>
      </div>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Movie added successfully!
        </Alert>
      )}

      <AddMovieForm onAddMovie={handleAddMovie} />
    </Container>
  )
}

export default AddMovie