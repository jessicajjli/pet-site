'use client';
import React from 'react';
import './styles/Card.css';

const Card = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <div className="pet-info">
        <h3>{pet.name}</h3>
        <p>ID: {pet.id}</p>
        <p>Acquired: {pet.acquiredDate}</p>
        <p>❤️ Hearts: {pet.hearts}</p>
        <p>😊 Happiness: {pet.happiness}</p>
        <p>🍖 Food: {pet.food}</p>
        <p>💰 Money: {pet.money}</p>
      </div>
    </div>
  );
};

export default Card;
