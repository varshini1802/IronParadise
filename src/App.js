import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ClientExperience from './components/ClientExperience';
import Trainers from './components/Trainers';
import Equipments from './components/Equipments';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} theme={theme} />

      <section id="home" className="section">
        <div className="hero">
          <h1>Welcome to Our Gym</h1>
          <p>Your Fitness Journey Starts Here</p>
        </div>
      </section>

      <section id="client" className="section">
        <ClientExperience />
      </section>

      <section id="trainers" className="section">
        <Trainers />
      </section>

      <section id="equipment" className="section">
        <Equipments />
      </section>
    </div>
  );
}

export default App;
