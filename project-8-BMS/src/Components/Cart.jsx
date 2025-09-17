import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Pagination,
  Badge,
} from "react-bootstrap";
import { FaTicketAlt } from "react-icons/fa";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Load cart from localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Remove item from cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Pagination
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const paginatedItems = cartItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => setCurrentPage(page);

  const renderPagination = () => {
    let items = [];
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
    return <Pagination className="justify-content-center mt-4">{items}</Pagination>;
  };

  return (
    <Container style={{ marginTop: "120px", marginBottom: "50px" }}>
      <h2 className="mb-4 text-center">
        <FaTicketAlt className="me-2 text-danger" />
        Your Bookings
      </h2>

      {cartItems.length === 0 ? (
        <h5 className="text-center text-muted mt-5">No bookings yet</h5>
      ) : (
        <>
          <Row>
            {paginatedItems.map((item) => (
              <Col md={6} lg={4} key={item.id} className="mb-4">
                <Card className="h-100 shadow-sm border-0 d-flex flex-column">
                  
                  {/* Movie Image (FULL IMAGE, not cropped) */}
                  <Card.Img
                    variant="top"
                    src={item.image || "/placeholder-image.jpg"}
                    alt={item.title || item.name}
                    style={{
                      width: "100%",
                      height: "auto",  
                      objectFit: "contain",
                      backgroundColor: "#f8f9fa" 
                    }}
                  />

                  {/* Movie Details */}
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title || item.name}</Card.Title>

                    <div className="mb-2">
                      {item.language && (
                        <Badge bg="primary" className="me-1">
                          {item.language}
                        </Badge>
                      )}
                      {item.genre && (
                        <Badge bg="secondary">{item.genre.split(",")[0]}</Badge>
                      )}
                    </div>

                    {item.description && (
                      <Card.Text className="text-muted small flex-grow-1">
                        {item.description}
                      </Card.Text>
                    )}

                    {/* Price & Remove Button */}
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="fw-bold text-success">
                        ₹{item.price || 250}
                      </span>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {renderPagination()}
        </>
      )}
    </Container>
  );
};

export default Cart;
