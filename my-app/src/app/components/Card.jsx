'use client';
import React, { useState } from 'react';
import './styles/Card.css';

const healthStages = ['Sick', 'Okay', 'Healthy'];

// Calculate the health stage based on pet attributes
const getHealthStage = (pet) => {
  if (pet.hearts >= 90 && pet.happiness >= 90 && pet.food >= 90) {
    return healthStages[2]; // Healthy
  } else if (pet.hearts >= 50 && pet.happiness >= 50 && pet.food >= 50) {
    return healthStages[1]; // Okay
  } else {
    return healthStages[0]; // Sick
  }
};

const Card = ({ pet, onClick, onCollect }) => {
  const [showBio, setShowBio] = useState(false); // State to toggle the BIO

  const toggleBio = (e) => {
    e.stopPropagation();
    setShowBio((prev) => !prev); // Toggle the BIO visibility
  };

  return (
    <article className="pet-card" onClick={onClick} aria-label={`Pet card for ${pet.name}`}>
      <section className="pet-card-top">
        <img
          src={pet.image}
          alt={`Image of ${pet.name}`}
          className="pet-image"
        />
        <div className="pet-info">
          <h2>{pet.name}</h2>
          <p>❤️ Hearts: <span aria-live="polite">{pet.hearts}</span></p>
          <p>😊 Happiness: <span aria-live="polite">{pet.happiness}</span></p>
          <p>🍖 Food: <span aria-live="polite">{pet.food}</span></p>
          <p>
            🌱 Health: 
            <span aria-live="polite" aria-label={`Health stage is ${getHealthStage(pet)}`}>
              {getHealthStage(pet)}
            </span>
          </p>
        </div>
      </section>
      <section className="pet-card-bottom">
        <button
          className="collect-button"
          onClick={(e) => {
            e.stopPropagation();
            onCollect(pet);
          }}
          aria-label={`Collect ${pet.money} coins from ${pet.name}`}
        >
          💰 Collect: {pet.money}
        </button>
        <p>Acquired: <time dateTime={pet.acquiredDate}>{pet.acquiredDate}</time></p>
        {/* Toggle BIO Button */}
        <button className="view-bio-button" onClick={toggleBio}>
          {showBio ? 'Hide Bio' : 'View Bio'}
        </button>
      </section>
      {/* BIO Section */}
      {showBio && (
        <section className="pet-bio">
          <p>{pet.bio || 'This pet has no bio yet!'}</p>
        </section>
      )}
    </article>
  );
};

export default Card;
