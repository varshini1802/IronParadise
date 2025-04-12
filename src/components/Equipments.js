import React, { useState } from 'react';
import './Equipments.css';

const equipments = [
  {
    name: 'Treadmill',
    image: 'https://i.ibb.co/ZGXmchN/treadmill.jpg',
    description: 'Great for cardio and fat burning. Adjustable incline and speed.',
    videoUrl: 'https://www.youtube.com/embed/evGVbSt4l-A',
  },
  {
    name: 'Dumbbells',
    image: 'https://i.ibb.co/KmNdXtP/dumbbells.jpg',
    description: 'Versatile weights for muscle toning, strength training & HIIT.',
    videoUrl: 'https://www.youtube.com/embed/8LbRkFVhZ9Y',
  },
  {
    name: 'Leg Press',
    image: 'https://i.ibb.co/q0FG0Yq/legpress.jpg',
    description: 'Targets quads, hamstrings & glutes. Great for lower body.',
    videoUrl: 'https://www.youtube.com/embed/FkzmWQvtdXk',
  },
  {
    name: 'Rowing Machine',
    image: 'https://i.ibb.co/DLGWQGf/rowing.jpg',
    description: 'Full-body cardio machine — strengthens back, legs and arms.',
    videoUrl: 'https://www.youtube.com/embed/U3ZMzxCeyyo',
  },
];

const Equipments = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const duplicated = [...equipments, ...equipments]; // for infinite scroll

  return (
    <section id="equipments" className="equipments-section">
      <h2 className="equipments-title">Equipments 🏋️‍♀️</h2>
      <div className="scroll-wrapper">
        <div className="scroll-track">
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="equipment-card-horizontal"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="equipment-media-horizontal">
                {hoveredIndex === index ? (
                  <iframe
                    src={`${item.videoUrl}?autoplay=1&mute=1`}
                    title={item.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img src={item.image} alt={item.name} />
                )}
              </div>
              <div className="equipment-info-horizontal">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipments;
