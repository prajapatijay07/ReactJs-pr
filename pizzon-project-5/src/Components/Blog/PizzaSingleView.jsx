import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from 'react-icons/fa';

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

function PizzaSingleView() {
  const firstPizza = pizzaData[0];
  const sidePizzas = pizzaData.slice(1, 3);

  const tags = ['Cooking', 'Pizza', 'Stories'];

  const orange = '#FBB200';

  return (
    <Container className="my-5" style={{ maxWidth: '1024px' }}>
      {/* Date + Gray line */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
        <p
          style={{
            color: '#777777',
            fontSize: '20px',
            fontWeight: '500',
            margin: 0,
            whiteSpace: 'nowrap',
          }}
        >
          {firstPizza.date}
        </p>
        <div
          style={{
            backgroundColor: '#dee2e6',
            width: '70px',
            height: '2px',
            borderRadius: '1px',
          }}
        />
      </div>

      {/* Title */}
      <h1 style={{ fontWeight: '700', fontSize: '40px', marginBottom: '2rem' }}>
        {firstPizza.description}
      </h1>

      {/* Big Centered Image */}
      <div className="text-center mb-5">
        <Image
          src={firstPizza.mainImage}
          alt={`Pizza ${firstPizza.id}`}
          style={{
            width: '1024px',
            maxWidth: '100%',
            height: '500px',
            objectFit: 'cover',
            borderRadius: '15px',
          }}
          fluid
        />
      </div>

      {/* Paragraphs */}
      <p style={{ fontSize: '18px', color: '#111', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sagittis congue tempor a gravida donec enim ipsum porta justo integer at odio velna. Maecenas gravida porttitor nunc, quis vehicula magna at luctus tempor. Quisque vel laoreet turpis. Urna augue, viverra a augue eget, dictum tempor diam. Sed pulvinar consectetur nibh, vel imperdiet dui varius viverra. Pellentesque ac massa lorem fusce eu cursus fusce.
      </p>

      <p style={{ fontSize: '18px', color: '#111', lineHeight: 1.6, marginBottom: '3rem' }}>
        Donec dolor suscipit magna vehicula impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien sem sagittis congue tempor gravida porttitor nunc, quis vehicula magna. Placerat varius consectetur nibh, vel imperdiet dui varius viverra donec ociis et magnis.
      </p>

      {/* Second heading */}
      <h2 style={{ fontWeight: '700', fontSize: '32px', marginBottom: '1.5rem' }}>
        Aliquet Tempus Tempor Gravida
      </h2>

      {/* Paragraph under second heading */}
      <p style={{ fontSize: '18px', color: '#111', lineHeight: 1.6, marginBottom: '3rem' }}>
        Cubilia laoreet augue egestas cursus magna nihil impedit ligula risus. Mauris donec ociis et magnis sapien etiam sapien rutrum tempor mullam blandit tempor sapien and gravida Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque laoreet turpis urna augue, viverra a augue eget, dictum tempor diam.
      </p>

      {/* Two images side by side */}
      <Row className="mb-4">
        {sidePizzas.map((pizza) => (
          <Col key={pizza.id} md={6} className="mb-3">
            <Image
              src={pizza.mainImage}
              alt={`Pizza ${pizza.id}`}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px' }}
              fluid
            />
          </Col>
        ))}
      </Row>

      {/* Two paragraphs below images */}
      <p style={{ fontSize: '18px', color: '#111', lineHeight: 1.6, marginBottom: '1.5rem' }}>
        In at mauris vel nisl convallis porta at vitae dui. Nam lacus ligula, vulputate molestie bibendum quis, aliquet elementum massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu cursus est. Fusce non nulla vitae massa placerat vulputate vel a purus. Aliqum mullam blandit tempor sapien gravida donec.
      </p>

      <p style={{ fontSize: '18px', color: '#111', lineHeight: 1.6, marginBottom: '3rem' }}>
        Nulla tincidunt volutpat tincidunt. Pellentesque habitant morbi tristique senectus et netus and malesuada famesa augue suscipit, luctus at neque purus neque dolor primis. Nemo sodales ipsam egestas volute turpis a dolores aliquam quaerat sodales sapien congue augue eget gravida laoreet turpis urna augue, viverra a augue eget, dictum dictum tempor diam. Sed pulvinar consectetur and placerat imperdiet.
      </p>

      {/* Tags and Social Icons Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '4rem',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Tags box on left */}
        <div
          style={{
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            maxWidth: '60%',
          }}
        >
          {tags.map((tag, idx) => (
            <div
              key={idx}
              style={{
                padding: '8px 25px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                color: '#555555',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                whiteSpace: 'nowrap',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#FBB200';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = '#FBB200';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#555555';
                e.currentTarget.style.borderColor = '#ccc';
              }}
            >
              {tag}
            </div>
          ))}

        </div>

        {/* Social Icons on right */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            {
              icon: FaFacebookF,
              color: '#3b5998',
              label: 'Facebook',
            },
            {
              icon: FaPinterestP,
              color: '#bd081c',
              label: 'Pinterest',
            },
            {
              icon: FaTwitter,
              color: '#1da1f2',
              label: 'Twitter',
            },
            {
              icon: FaInstagram,
              color: '#e4405f',
              label: 'Instagram',
            },
          ].map(({ icon: Icon, color, label }, i) => (
            <div
              key={i}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                backgroundColor: color,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                color: 'white',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = orange;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = color;
              }}
              aria-label={label}
              title={label}
            >
              <Icon size={24} color="white" />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default PizzaSingleView;