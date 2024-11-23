'use client';
import React from 'react';
import './styles/Card.css';

const Card = ({ pet }) => {
  return (
    <div className="pet-card">
      <div className="pet-card-top">
        <img src={pet.image} alt={pet.name} className="pet-image" />
        <div className="pet-info">
          <h3>{pet.name}</h3>
          <p>❤️ Hearts: {pet.hearts}</p>
          <p>😊 Happiness: {pet.happiness}</p>
          <p>🍖 Food: {pet.food}</p>
        </div>
      </div>
      <div className="pet-card-bottom">
        <button>💰 Collect: {pet.money}</button>
        <p>Acquired: {pet.acquiredDate}</p>
      </div>
    </div>
  );
};

export default Card;
