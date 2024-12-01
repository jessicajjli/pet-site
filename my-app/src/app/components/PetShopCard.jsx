'use client';
import React from 'react';
import './styles/PetShopCard.css';

const PetShopCard = ({ pet, onBuy }) => {
  return (
    <div className="pet-shop-card">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <div className="pet-shop-info">
        <h3>{pet.name}</h3>
        <p>💰 Price: {pet.price}</p>
        <button onClick={() => onBuy(pet)} className="buy-button">
          Buy
        </button>
      </div>
    </div>
  );
};

export default PetShopCard;
