'use client';
import React, { useState } from 'react';
import './styles/Card.css';

const healthStages = ['Sick', 'Okay', 'Healthy'];

// Calculate the health stage based on pet attributes
const getHealthStage = (pet) => {
  if (pet.hearts >= 100 && pet.happiness >= 100 && pet.food >= 100) {
    return healthStages[2]; // Healthy
  } else if (pet.hearts >= 50 && pet.happiness >= 50 && pet.food >= 50) {
    return healthStages[1]; // Okay
  } else {
    return healthStages[0]; // Sick
  }
};

const Card = ({ pet, onClick, onCollect, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState(0);

  const handleDonate = (e) => {
    e.stopPropagation();
    if (donationAmount > 0) {
      onDonate(pet, donationAmount); 
      setDonationAmount(0); 
      alert(`Donated ${donationAmount} coins to ${pet.name}!`);
    } else {
      alert('Please enter a valid donation amount.');
    }
  };

  return (
    <div className="pet-card" onClick={onClick}>
      <div className="pet-card-top">
        <img src={pet.image} alt={pet.name} className="pet-image" />
        <div className="pet-info">
          <h3>{pet.name}</h3>
          <p>❤️ Hearts: {pet.hearts}</p>
          <p>😊 Happiness: {pet.happiness}</p>
          <p>🍖 Food: {pet.food}</p>
          <p>🌱 Health Stage: {getHealthStage(pet)}</p>
        </div>
      </div>
      <div className="pet-card-bottom">
        <button
          className="collect-button"
          onClick={(e) => {
            e.stopPropagation();
            onCollect(pet);
          }}
        >
          💰 Collect: {pet.money}
        </button>
        <div className="donate-section">
          <input
            type="number"
            placeholder="Donate Coins"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={handleDonate}>Donate</button>
          Donate 💰
          </button>
        </div>
        <p>Acquired: {pet.acquiredDate}</p>
      </div>
    </div>
  );
};

export default Card;
