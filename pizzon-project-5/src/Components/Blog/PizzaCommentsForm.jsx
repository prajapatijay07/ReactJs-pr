import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function PizzaCommentForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Container className="my-5" style={{ marginLeft: "120px" }}>
      {/* Title */}
      <h4
        style={{
          fontSize: "34px",
          color: "#111111",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        Leave Your Comments
      </h4>

      {/* Subtext */}
      <p
        style={{
          color: "#777777",
          fontSize: "18px",
          marginBottom: "30px",
        }}
      >
        Your email address will not be published. Required fields are marked{" "}
        <span style={{ color: "red" }}>*</span>
      </p>

      {/* Form */}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* Name */}
          <Col xs={12} md={6} className="mb-3 mb-md-0">
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "12px 20px",
                  width: "492px",
                  height: "49px",
                  fontSize: "16px",
                }}
              />
            </Form.Group>
          </Col>

          {/* Email */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "12px 20px",
                  width: "492px",
                  height: "49px",
                  fontSize: "16px",
                }}
              />
            </Form.Group>
          </Col>
        </Row>

        {/* Message */}
        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: "12px 20px",
              width: "1024px",
              height: "120px",
              fontSize: "16px",
              resize: "none",
            }}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button
          type="submit"
          style={{
            padding: "12px 30px",
            backgroundColor: "#FBB200",
            border: "none",
            fontSize: "20px",
            fontWeight: "600",
            borderRadius: "50px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f22e3e")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#FBB200")}
        >
           Post Comment
        </Button>
      </Form>
    </Container>
  );
}

export default PizzaCommentForm;