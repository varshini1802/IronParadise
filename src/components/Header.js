import React, { useState } from 'react';
import Modal from 'react-modal';
import './Header.css';

Modal.setAppElement('#root');

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const packages = [
    { name: 'Per Session', price: '₹500 + 18% GST' },
    { name: 'One Month', price: '₹3,999 + 18% GST' },
    { name: '3 + 1 Month', price: '₹7,999 + 18% GST' },
    { name: '6 + 2 Month', price: '₹9,999 + 18% GST' },
    { name: '12 + 3 Month', price: '₹15,499 + 18% GST' },
  ];

  const handleProceed = () => {
    if (!selectedPackage) {
      alert('Please select a package to continue.');
      return;
    }
    window.location.href = '/payment';
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Gym Logo" />
          <span> </span>
        </div>

        <div className="right-section">
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#client-experience">Client Experience</a>
            <a href="#trainers">Trainers</a>
            <a href="#equipments">Equipments</a>
          </nav>
          <button className="get-started-btn" onClick={() => setIsModalOpen(true)}>
            Get Started
          </button>
        </div>
      </header>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>🎟️ Admission Details</h2>
        <p>Select your preferred gym package:</p>

        <div className="package-options">
          {packages.map((pkg, idx) => (
            <label key={idx} className="package-option">
              <span>{pkg.name} — {pkg.price}</span>
              <input
                type="radio"
                name="package"
                value={pkg.name}
                checked={selectedPackage === pkg.name}
                onChange={() => setSelectedPackage(pkg.name)}
              />
            </label>
          ))}
        </div>

        <div className="modal-buttons">
          <button onClick={handleProceed}>Proceed to Payment</button>
          <button onClick={() => setIsModalOpen(false)}>Go Back</button>
        </div>
      </Modal>
    </>
  );
};

export default Header;
