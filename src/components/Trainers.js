import React, { useState } from "react";
import "./Trainers.css";

const trainers = [
  { name: "Amit Sharma", image: "/trainers/trainer1.jpg", desc: "Expert in functional training and weight loss.", phone: "9876543210" },
  { name: "Neha Reddy", image: "/trainers/trainer2.jpg", desc: "Specialist in strength and endurance training.", phone: "8765432109" },
  { name: "Ravi Mehta", image: "/trainers/trainer3.jpg", desc: "Focuses on holistic body transformations.", phone: "7654321098" },
  { name: "Sneha Kapoor", image: "/trainers/trainer4.jpg", desc: "Zumba and dance fitness expert.", phone: "6543210987" },
  { name: "Arjun Das", image: "/trainers/trainer5.jpg", desc: "HIIT coach and energy booster.", phone: "5432109876" },
  { name: "Kiran Rao", image: "/trainers/trainer6.jpg", desc: "Bodybuilding and powerlifting champion.", phone: "4321098765" },
  { name: "Divya Iyer", image: "/trainers/trainer7.jpg", desc: "Yoga and flexibility trainer.", phone: "3210987654" },
  { name: "Rohit Sen", image: "/trainers/trainer8.jpg", desc: "Certified CrossFit instructor.", phone: "2109876543" },
  { name: "Meera Singh", image: "/trainers/trainer9.jpg", desc: "Nutrition and health advisor.", phone: "1098765432" },
  { name: "Ajay Kumar", image: "/trainers/trainer10.jpg", desc: "Strength & endurance expert.", phone: "9988776655" },
];

const TrainerSection = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleToggle = () => {
    setVisibleCount((prev) => (prev === 5 ? trainers.length : 5));
  };

  const isExpanded = visibleCount > 5;

  return (
    <div className="trainer-section" id="trainers">
      <h2 className="section-title">Meet Our Trainers</h2>
      <div className="trainer-grid">
        {trainers.slice(0, visibleCount).map((trainer, index) => (
          <div className="trainer-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img src={trainer.image} alt={trainer.name} />
                <h3>{trainer.name}</h3>
              </div>
              <div className="card-back">
                <p>{trainer.desc}</p>
                <p className="phone">📞 {trainer.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="show-toggle" onClick={handleToggle}>
        {isExpanded ? "Show Less ⬅" : "Show More ➤"}
      </div>
    </div>
  );
};

export default TrainerSection;
