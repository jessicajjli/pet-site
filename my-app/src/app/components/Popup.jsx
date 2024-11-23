'use client';
import React from 'react';
import './styles/Popup.css';

const Popup = ({ pet, onClose, onUpdatePet, onCollect }) => {
  if (!pet) return null;

  const handleIncrease = (stat) => {
    const updatedPet = {
      ...pet,
      [stat]: pet[stat] + 10, // Increase the stat by 10 (adjust as needed)
    };
    onUpdatePet(updatedPet);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{pet.name}</h2>
        <img src={pet.image} alt={pet.name} className="popup-image" />
        {/* New container for stats and buttons */}
        <div className="popup-stats-buttons-container">
          <div className="popup-stats">
            <p>❤️ Hearts: {pet.hearts}</p>
            <p>😊 Happiness: {pet.happiness}</p>
            <p>🍖 Food: {pet.food}</p>
            <p>💰 Money: {pet.money}</p>
            <p>📅 Acquired: {pet.acquiredDate}</p>
          </div>
          <div className="popup-buttons">
            <button onClick={() => handleIncrease('happiness')}>
              Increase Happiness
            </button>
            <button onClick={() => handleIncrease('food')}>
              Increase Food
            </button>
            <button onClick={() => handleIncrease('hearts')}>
              Increase Hearts
            </button>
            <button onClick={() => onCollect(pet)}>Collect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
