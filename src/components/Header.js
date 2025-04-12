import React from 'react';
// import GetStartedModal from './components/GetStartedModal';



import './Header.css';

const Header = () => {
  const handleGetStarted = () => {
    alert('Contact us at: +91-9876543210 or email@example.com');
  };

  return (
    <header className="header">
      <div className="logo">🏋️ GymLogo</div>
      <nav className="nav-links">
      
  <a href="#home">Home</a>
  <a href="#client-experience">Client Experience</a>
  <a href="#trainers">Trainers</a>
  <a href="#equipments">Equipments</a>




        <button onClick={handleGetStarted}>Get Started</button>
      </nav>
      {/* <GetStartedModal /> */}
    </header>
    
  );
};

export default Header;
