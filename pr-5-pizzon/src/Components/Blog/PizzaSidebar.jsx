import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import {
  FaSearch,
  FaArrowRight,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';

import recent1 from '../../assets/recent-1.jpg';
import recent2 from '../../assets/recent-2.jpg';
import recent3 from '../../assets/recent-3.jpg';
import recent4 from '../../assets/recent-1.jpg';

function PizzaSidebar() {
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchHover, setSearchHover] = useState(false);

  const categories = [
    { name: 'Classic Pizzas', count: 5 },
    { name: 'Vegetarian', count: 7 },
    { name: 'Spicy Specials', count: 3 },
    { name: 'Dessert Pizzas', count: 2 },
  ];

  const recentNews = [
    { title: "How to keep fear from ruining your art business", date: "7 Mar 2022", mainImage: recent1 },
    { title: "Ultimate guide to perfect pizza dough", date: "15 Apr 2022", mainImage: recent2 },
    { title: "5 toppings that transform your pizza", date: "30 May 2022", mainImage: recent3 },
    { title: "Making the best dessert pizzas", date: "10 Jun 2022", mainImage: recent4 || recent1 },
  ];

  const tags = [
    'Restaurent', 'Seafoods ', 'Juggernaut Burger', 'Pizza',
    'Bread', 'Drinks & Fruits', 'Masalas',
  ];

  const orange = '#FBB200';
  const redOrange = '#f22e3e';

  return (
    <div className="mt-5 px-3" style={{ fontFamily: 'DM Sans' }}>
      {/* Search Section */}
      <h5 className="fw-bold mb-3 fs-4">Search</h5>
      <div className="mb-4">
        <InputGroup
          style={{
            border: `1px solid ${searchFocused ? redOrange : '#ced4da'}`,
            borderRadius: '15px',
            overflow: 'hidden',
            maxWidth: '350px',
          }}
        >
          <Form.Control
            type="text"
            placeholder="Search pizza..."
            className="shadow-none border-0"
            style={{
              borderRadius: '0',
              boxShadow: 'none',
              cursor: 'text',
              padding: '12px 70px 12px 20px',
            }}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <InputGroup.Text
            style={{
              borderRadius: '0',
              padding: '0px 20px',
              color: 'white',
              cursor: 'pointer',
              backgroundColor: searchHover ? orange : redOrange,
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={() => setSearchHover(true)}
            onMouseLeave={() => setSearchHover(false)}
          >
            <FaSearch />
          </InputGroup.Text>
        </InputGroup>
      </div>

      {/* Categories Section */}
      <h5 className="mb-3 mt-5 fw-bold fs-4">Categories</h5>
      <ul className="list-unstyled mb-4" style={{ maxWidth: '350px' }}>
        {categories.map((cat, idx) => (
          <li
            key={idx}
            className="mb-3 border-bottom border-secondary pb-2"
            onMouseEnter={() => setHoveredCategoryIndex(idx)}
            onMouseLeave={() => setHoveredCategoryIndex(null)}
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex justify-content-between align-items-center flex-nowrap">
              <div className="d-flex align-items-center gap-2">
                <span
                  className={`fw-bold ${hoveredCategoryIndex === idx ? 'text-danger' : 'text-secondary'}`}
                  style={{ fontSize: '24px' }}
                >
                  {cat.name}
                </span>
                <FaArrowRight
                  size={16}
                  color={hoveredCategoryIndex === idx ? redOrange : '#6c757d'}
                />
              </div>
              <span
                className={`fw-bold ${hoveredCategoryIndex === idx ? 'text-danger' : 'text-muted'}`}
                style={{ fontSize: '18px', whiteSpace: 'nowrap' }}
              >
                ({cat.count < 10 ? '0' + cat.count : cat.count})
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Recent News Section */}
      <h5 className="mb-3 mt-5 fw-bold fs-4">Recent News</h5>
      <div style={{ maxWidth: '350px', marginBottom: '2rem' }}>
        {recentNews.slice(0, 3).map((news, i) => (
          <div
            key={i}
            className="d-flex align-items-center mb-3"
            style={{ cursor: 'pointer', gap: '15px' }}
          >
            <div
              style={{
                overflow: 'hidden',
                borderRadius: '50%',
                width: '114px',
                height: '114px',
                flexShrink: 0,
              }}
              className="recent-news-img-container"
            >
              <img
                src={news.mainImage}
                alt={news.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
                className="recent-news-img"
              />
            </div>
            <div>
              <small className="text-muted fw-bold" style={{ fontSize: '16px' }}>{news.date}</small>
              <p
                className="mb-0 fw-bold"
                style={{
                  fontSize: '24px',
                  color: '#111',
                  transition: 'color 0.3s ease',
                  marginTop: '3px',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = redOrange)}
                onMouseLeave={e => (e.currentTarget.style.color = '#111')}
              >
                {news.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tags Cloud Section */}
      <h5 className="mb-3 mt-5 fw-bold fs-4">Tags Cloud</h5>
      <div
        style={{
          maxWidth: '350px',
          letterSpacing: '2px',
          fontWeight: '700',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '10px',
          marginBottom: '2rem',
        }}
      >
        {tags.map((tag, idx) => (
          <div
            key={idx}
            style={{
              padding: '10px 20px',
              borderRadius: '12px',
              border: '1px solid #ddd',
              textAlign: 'center',
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              fontSize: '18px',
              color: '#7d7d7d',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = orange;
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = orange;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#7d7d7d';
              e.currentTarget.style.borderColor = '#ddd';
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Follow Us Section */}
      <h5 className="mb-3 fw-bold fs-4">Follow Us</h5>
      <div className="d-flex gap-3" style={{ maxWidth: '350px' }}>
        {[{
          icon: FaFacebookF,
          color: '#3b5998',
          label: 'Facebook',
        }, {
          icon: FaPinterestP,
          color: '#bd081c',
          label: 'Pinterest',
        }, {
          icon: FaTwitter,
          color: '#1da1f2',
          label: 'Twitter',
        }, {
          icon: FaInstagram,
          color: '#e4405f',
          label: 'Instagram',
        }].map(({ icon: Icon, color, label }, i) => (
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
              transition: 'background-color 0.3s ease',
              color: 'white',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = orange;
              e.currentTarget.querySelector('svg').style.color = 'white';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = color;
              e.currentTarget.querySelector('svg').style.color = 'white';
            }}
            aria-label={label}
            title={label}
          >
            <Icon size={24} color="white" />
          </div>
        ))}
      </div>

      {/* Extra Styles */}
      <style>
        {`
          .recent-news-img-container:hover .recent-news-img {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
}

export default PizzaSidebar;
