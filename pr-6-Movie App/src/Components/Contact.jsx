import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Contact = () => (
  <Container className="mb-5">
    <h2 className="text-center fw-bold mb-4" style={{ color: "var(--button-purple)" }}>Contact Us</h2>
    <Row className="justify-content-center">
      <Col md={8}>
        <Card className="shadow border-0">
          <Card.Body>
            <Form onSubmit={(e)=> { e.preventDefault(); alert('Message sent! (demo)'); }}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">Send Message</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Contact;