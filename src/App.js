import React from 'react';
import Header from './components/Header';
import ClientExperience from './components/ClientExperience';
import Trainers from './components/Trainers';
import Equipments from './components/Equipments';



const App = () => {
  return (
    <div>
      <Header />
      <main style={{
        padding: '60px 30px',
        background: 'linear-gradient(to bottom, #1c1c1c, #2a2a2a)',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'Poppins, sans-serif'
      }}>
        <h1 style={{ fontSize: '42px', marginBottom: '20px', color: '#f04f4f' }}>
          Transform Your Body. Own Your Power. 💥
        </h1>
        <p style={{ fontSize: '20px', maxWidth: '600px', lineHeight: '1.6' }}>
          At IronCore Gym, we help you smash your goals with world-class trainers and personalized fitness experiences.
        </p>
      </main>
      

<ClientExperience />
<Trainers />
<Equipments />


    </div>
  );
};

export default App;
