import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import blogList1 from '../../assets/blog-list-1.jpg';
import blogList2 from '../../assets/blog-list-2.jpg';
import blogList3 from '../../assets/blog-list-3.jpg';

const pizzaData = [
  {
    id: 1,
    mainImage: blogList1,
    date: "7 Mar 2022",
    description: "How to keep fear from ruining your art business with confidence",
  },
  {
    id: 2,
    mainImage: blogList2,
    date: "15 Apr 2022",
    description: "How to keep fear from ruining your art business with confidence",
  },
  {
    id: 3,
    mainImage: blogList3,
    date: "30 May 2022",
    description: "How to keep fear from ruining your art business with confidence",
  },
];

function PizzaMenu() {
  // Description hover color toggle
  const handleDescriptionHover = (e, entering) => {
    e.target.style.color = entering ? "#f22E3e" : "#111111";
  };

  return (
    <Container fluid className="my-5">
      <Row>
        <Col lg={12} md={12} className="px-5">
          <Row className="g-4">
            {pizzaData.map((pizza) => (
              <Col key={pizza.id} lg={12} sm={12}>
                <Card className="border-0 bg-transparent p-0">
                  {/* Image container with zoom on hover */}
                  <div
                    style={{
                      borderRadius: "50px",
                      overflow: "hidden",
                      marginBottom: "1rem",
                      maxWidth: "767px",
                      cursor: "pointer",
                    }}
                    className="image-zoom-container"
                  >
                    <Card.Img
                      src={pizza.mainImage}
                      alt={`Pizza ${pizza.id}`}
                      style={{
                        borderRadius: "50px",
                        objectFit: "cover",
                        width: "100%",
                        height: "418px",
                        display: "block",
                        transition: "transform 0.5s ease",
                      }}
                      className="image-zoom"
                    />
                  </div>

                  {/* Date and line */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "1rem",
                      maxWidth: "767px",
                    }}
                  >
                    <span
                      style={{
                        color: "#777777",
                        fontSize: "18px",
                        fontWeight: "500",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {pizza.date}
                    </span>
                    <div
                      style={{
                        width: "70px",
                        height: "2px",
                        backgroundColor: "#dee2e6",
                        borderRadius: "1px",
                      }}
                    />
                  </div>

                  {/* Description */}
                  <Card.Text
                    style={{
                      maxWidth: "767px",
                      fontSize: "28px",
                      marginBottom: "1rem",
                      color: "#111111",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => handleDescriptionHover(e, true)}
                    onMouseOut={(e) => handleDescriptionHover(e, false)}
                  >
                    {pizza.description}
                  </Card.Text>

                  {/* Read More Link */}
                  <a
                    to={`/pizza/${pizza.id}`}
                    className="fw-semibold text-decoration-none d-inline-flex align-items-center"
                    style={{
                      color: "#f22E3e",
                      cursor: "pointer",
                      fontSize: "22px",
                      maxWidth: "767px",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = "#f22E3e";
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) icon.style.color = "#f22E3e";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = "#f22E3e";
                      const icon = e.currentTarget.querySelector('svg');
                      if (icon) icon.style.color = "#f22E3e";
                    }}
                  >
                    <FaArrowRight style={{ color: "#f22E3e", marginRight: "5px" }} />
                    Read More
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Styles for zoom effect */}
      <style>
        {`
          .image-zoom-container:hover .image-zoom {
            transform: scale(1.05);
          }
        `}
      </style>
    </Container>
  );
}

export default PizzaMenu;
