import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({ name, title, location, skills, email, phone, image, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="avatar" />
      <h3>{name}</h3>
      <p className="title">{title}</p>
      <p className="location">{location}</p>
      <p className="skills"><strong>Skills:</strong> {skills.join(', ')}</p>
      <p className="bio">{bio}</p>
      <div className="contact">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>``
    </div>
  );
};

export default UserProfileCard;