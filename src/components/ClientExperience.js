import React, { useState } from 'react';
import './ClientExperience.css';

const clients = [
  {
    name: 'Ravi Sharma',
    image: 'https://i.ibb.co/fX25gNK/client1.jpg',
    description: 'I lost 18kg and feel younger than ever! The trainers here changed my life.',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    name: 'Pooja Nair',
    image: 'https://i.ibb.co/kDmC1Kt/client2.jpg',
    description: 'I gained confidence and strength after joining this gym. Loved the vibe!',
    videoUrl: 'https://www.youtube.com/embed/x7W8t2MDtd8',
  },
  {
    name: 'Sameer Qureshi',
    image: 'https://i.ibb.co/j5BBrQK/client3.jpg',
    description: 'A wholesome transformation in 6 months! Highly recommend the trainers.',
    videoUrl: 'https://www.youtube.com/embed/IUN664s7N-c',
  },
  {
    name: 'Anjali Rao',
    image: 'https://i.ibb.co/7XR0VCZ/client4.jpg',
    description: 'I enjoy every workout session here. Great trainers and fantastic energy!',
    videoUrl: 'https://www.youtube.com/embed/VYOjWnS4cMY',
  },
];

const ClientExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const visibleClients = showAll ? clients : clients.slice(0, 2);

  return (
    
    <section id="client-experience" className="clients-section">

      <h2 className="clients-title">Client Experiences 💬</h2>
      {visibleClients.map((client, index) => (
        <div className={`client-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={index}>
          <div
            className="client-media"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <iframe
                src={client.videoUrl + '?autoplay=1&mute=1'}
                title={client.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={client.image} alt={client.name} />
            )}
          </div>
          <div className="client-info">
            <h3>{client.name}</h3>
            <p>{client.description}</p>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More Experiences'}
        </button>
      </div>
    </section>
  );
};

export default ClientExperience;
