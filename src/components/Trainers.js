import React, { useState } from 'react';
import './Trainers.css';

const trainers = [
  {
    name: 'Amit Rathore',
    image: 'https://i.ibb.co/L9F47Nz/trainer1.jpg',
    description: 'Certified strength coach with 10+ years of experience in building muscle and power.',
    phone: '+91 98765 43210',
  },
  {
    name: 'Neha Singh',
    image: 'https://i.ibb.co/w4PH6pq/trainer2.jpg',
    description: 'Functional training and fat-loss expert, Neha brings motivation and energy to every session.',
    phone: '+91 91234 56789',
  },
  {
    name: 'Rahul Mehra',
    image: 'https://i.ibb.co/0yGKkyF/trainer3.jpg',
    description: 'Former national sprinter turned performance coach. Specializes in agility and athletic training.',
    phone: '+91 99887 66554',
  },
  {
    name: 'Simran Kaur',
    image: 'https://i.ibb.co/QpjKZ03/trainer4.jpg',
    description: 'Yoga and flexibility specialist with a focus on body alignment and injury prevention.',
    phone: '+91 80000 11111',
  },
  {
    name: 'Vikram Desai',
    image: 'https://i.ibb.co/dkVZmrb/trainer5.jpg',
    description: 'Science-based transformation plans for efficient cutting or bulking.',
    phone: '+91 90909 22222',
  },
  {
    name: 'Ayesha Iqbal',
    image: 'https://i.ibb.co/GpS1c4S/trainer6.jpg',
    description: 'Nutrition coach and female fitness specialist. Focused on holistic wellness and strength.',
    phone: '+91 70707 33333',
  },
  {
    name: 'Rohit Sinha',
    image: 'https://i.ibb.co/zhdDjqx/trainer7.jpg',
    description: 'CrossFit Level-2 coach who builds explosive power and intensity.',
    phone: '+91 60606 44444',
  },
  {
    name: 'Tanya Verma',
    image: 'https://i.ibb.co/WcKgd1d/trainer8.jpg',
    description: 'Zumba and bootcamp workouts — her energy is contagious.',
    phone: '+91 50505 55555',
  },
  {
    name: 'Dev Patel',
    image: 'https://i.ibb.co/GC1ThgN/trainer9.jpg',
    description: 'Mobility expert focused on pain-free performance and posture.',
    phone: '+91 40404 66666',
  },
  {
    name: 'Meera D’Souza',
    image: 'https://i.ibb.co/XsKPQv2/trainer10.jpg',
    description: 'Pilates instructor with a calm approach and powerful core routines.',
    phone: '+91 30303 77777',
  },
];

const Trainers = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleTrainers = showAll ? trainers : trainers.slice(0, 3);

  return (
    <section id="trainers" className="trainers-section">

      <h2 className="trainers-title">Meet Our Trainers 💪</h2>
      {visibleTrainers.map((trainer, index) => (
        <div className={`trainer-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
          <div className="image-container">
            <img src={trainer.image} alt={trainer.name} className="trainer-image" />
            <div className="contact-overlay">
              <p>📞 {trainer.phone}</p>
            </div>
          </div>
          <div className="trainer-info">
            <h3>{trainer.name}</h3>
            <p>{trainer.description}</p>
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={() => setShowAll(!showAll)} className="toggle-button">
          {showAll ? 'Show Less' : 'Show All Trainers'}
        </button>
      </div>
    </section>
  );
};

export default Trainers;
