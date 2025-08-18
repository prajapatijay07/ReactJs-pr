import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// Import image
import gridImg from '../../assets/grid-img.png';

function PrevNextPost() {
  const paragraphText = "Nemo sodales ipsam egestas volute turpis aliquam quaerat sodales";

  const paragraphStyle = {
    fontSize: '18px',
    margin: 0,
    color: '#777777',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  return (
    <div style={{ backgroundColor: '#fffaed', padding: '30px 0' }}>
      <Container>
        <Row className="align-items-center text-md-start text-center">
          
          {/* Previous Post */}
          <Col md={4} className="mb-3 mb-md-0">
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '0.5rem' }}>
              Previous Post
            </h3>
            <p
              style={paragraphStyle}
              onMouseEnter={(e) => (e.target.style.color = '#FBB200')}
              onMouseLeave={(e) => (e.target.style.color = '#777777')}
            >
              {paragraphText}
            </p>
          </Col>

          {/* Image */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <Image
              src={gridImg}
              alt="Post Image"
              fluid
              style={{
                maxHeight: '150px',
                borderRadius: '10px',
                objectFit: 'cover',
              }}
            />
          </Col>

          {/* Next Post */}
          <Col md={4} className="mb-3 mb-md-0 text-md-end text-center">
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '0.5rem' }}>
              Next Post
            </h3>
            <p
              style={paragraphStyle}
              onMouseEnter={(e) => (e.target.style.color = '#FBB200')}
              onMouseLeave={(e) => (e.target.style.color = '#777777')}
            >
              {paragraphText}
            </p>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}

export default PrevNextPost;
