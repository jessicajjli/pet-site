'use client';
import React from 'react';
import './styles/Card.css';

const Card = ({ pet, onClick, onCollect, }) => {
  return (
    <div className="pet-card" onClick={onClick}>
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
        <button className='collect-button'
          onClick={(e) => {
            e.stopPropagation();
            onCollect(pet); 
                       
          }}
        >
            💰 Collect: {pet.money}
          </button>
        <p>Acquired: {pet.acquiredDate}</p>
      </div>
    </div>
  );
};

export default Card;
