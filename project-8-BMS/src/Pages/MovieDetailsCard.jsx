import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar, FaTicketAlt } from "react-icons/fa";

// Import posters (same as Home.js)
import posterWar2 from "../assets/war2.jpg";
import Narsimha from "../assets/Narstmha.jpg";
import posterSaiyaara from "../assets/saiyaara.jpg";
import posterCoolie from "../assets/coolie.jpg";

const MovieDetailsCard = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);

  // Movies data (same as Home.js)
  const movies = [
    { id: 1, title: "War 2", image: posterWar2, rating: 8.2, genre: "Action, Thriller", language: "Hindi", description: "Years ago Agent Kabir went rogue. Became India`s greatest villain ever. But this time, as he descends further into the deepest shadows India sends it`s deadliest, most lethal agent after him. A Special Units Officer who is more than Kabir`s equal! Absolutely Nuclear! Agent Vikram.  A relentless Terminator driven by his own demons, determined to put a bullet into Kabir`s skull. A brutal Cat versus Rottweiler game begins as the two face off - The entire world is their brutal bloody battleground.The choices ahead of them are impossible. The price to be paid is ultimate. This is a War with spectacular action and heart-wrenching emotion." },
    { id: 2, title: "Mahavatar Narsimha", image: Narsimha, rating: 9.6, genre: "Action, Animation", language: "Hindi", description: "When Faith is Challenged, He Appears.In a World torn apart by Darkness and Chaos...Witness the Appearance of the most Ferocious, The Half-Man,Half-Lion Avatar-Lord Vishnu`s Most Powerful Incarnation.Unleash the Fury! Witness the Roar of Mahavatar Narsimha." },
    { id: 3, title: "Saiyaara", image: posterSaiyaara, rating: 7.8, genre: "Romance, Drama", language: "Hindi", description: "A heartfelt romantic drama exploring love, sacrifice, and destiny.An intense love story that will break your heart and heal it, too." },
    { id: 4, title: "Coolie: The Powerhouse", image: posterCoolie, rating: 8.5, genre: "Action, Drama", language: "Hindi", description: "A high-octane drama showcasing the life struggles and heroism of a cooCoolie tells the story of Deva, a former coolie union leader who now runs a mansion in Chennai, offering shelter to young men. His world is shaken when his closest friend, Rajasekar, dies under suspicious circumstances. As Deva begins to investigate, he uncovers a dark trail of crime and corruption that pulls him back into a battle he thought he had left behind.lie." },
  ];

  useEffect(() => {
    const foundMovie = movies.find((m) => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  const handleAddToCart = (movie) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(movie);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    alert(`${movie.title} added to cart 🎟`);
  };

  if (!movie) return <h2 className="text-center mt-5">Movie Not Found</h2>;

  return (
    <Container className="py-5 mt-5">
      <Row className="align-items-center">
        {/* Poster */}
        <Col md={5} className="mb-4">
          <Card className="shadow-sm">
            <Card.Img
              src={movie.image}
              alt={movie.title}
              style={{ height: "750px", objectFit: "cover" }}
            />
          </Card>
        </Col>

        {/* Details */}
        <Col md={7}>
          <h2 className="fw-bold">{movie.title}</h2>
          <div className="mb-3">
            <span className="text-warning fs-5 me-3">
              <FaStar className="me-1" /> {movie.rating}/10
            </span>
            <span className="badge bg-primary fs-6">{movie.language}</span>
          </div>
          <p className="text-muted mb-2">
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p style={{ fontSize: "1.1rem" }}>{movie.description}</p>

          <Button
            variant="danger"
            size="lg"
            onClick={() => handleAddToCart(movie)}
          >
            <FaTicketAlt className="me-2" /> Book Ticket
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailsCard;