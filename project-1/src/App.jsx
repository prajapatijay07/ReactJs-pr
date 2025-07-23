import React from 'react';
import UserProfileCard from './Components/UserProfileCard/UserProfileCard';
import './App.css';

import alice from './assets/alice.jpg';
import leo from './assets/leo.jpg';
import zara from './assets/zara.jpg';
import max from './assets/max.jpg';
import mia from './assets/mia.jpg';
import elon from './assets/elon.jpg';

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="main-title">Meet Our Creative Team</h1>
      <div className="grid-container">

        <UserProfileCard
          name="Alice Rivera"
          title="UI/UX Designer"
          location="Barcelona, Spain"
          skills={['Figma', 'Sketch', 'Prototyping']}
          email="alice@creativeteam.com"
          phone="+34 600 123 456"
          image={alice}
          bio="Passionate about creating smooth and user-centric digital experiences."
        />

        <UserProfileCard
          name="Leo Mendes"
          title="Frontend Developer"
          location="Lisbon, Portugal"
          skills={['React', 'Tailwind CSS', 'JavaScript']}
          email="leo@creativeteam.com"
          phone="+351 912 456 789"
          image={leo}
          bio="Building interactive UIs with modern frameworks and animations."
        />

        <UserProfileCard
          name="Zara Khan"
          title="Content Strategist"
          location="Dubai, UAE"
          skills={['SEO', 'Copywriting', 'Storytelling']}
          email="zara@creativeteam.com"
          phone="+971 50 345 6789"
          image={zara}
          bio="Crafting compelling narratives that align business and audience."
        />

        <UserProfileCard
          name="Max Tanaka"
          title="Illustrator"
          location="Tokyo, Japan"
          skills={['Digital Art', '2D Animation', 'Branding']}
          email="max@creativeteam.com"
          phone="+81 80 1122 3344"
          image={max}
          bio="Creates eye-catching illustrations that bring ideas to life."
        />

        <UserProfileCard
          name="Mia Njoroge"
          title="Marketing Lead"
          location="Nairobi, Kenya"
          skills={['Digital Campaigns', 'Social Media', 'Analytics']}
          email="mia@creativeteam.com"
          phone="+254 712 345678"
          image={mia}
          bio="Leads creative campaigns that drive real business growth."
        />

        <UserProfileCard
          name="Elon Flores"
          title="Backend Developer"
          location="Manila, Philippines"
          skills={['Node.js', 'MongoDB', 'API Design']}
          email="elon@creativeteam.com"
          phone="+63 917 999 8888"
          image={elon}
          bio="Ensures performance, security, and scalability behind the scenes."
        />

      </div>
    </div>
  );
}

export default App;
