'use client';
import React from 'react';
import './styles/PetShopCard.css';

const PetShopCard = ({ pet, onBuy }) => {
  return (
    <article className="pet-shop-card" aria-labelledby={`pet-title-${pet.id}`} aria-describedby={`pet-price-${pet.id}`}>
      <img src={pet.image} alt={`Image of ${pet.name}`} className="pet-image" />
      <div className="pet-shop-info">
        <h1 id={`pet-title-${pet.id}`}>{pet.name}</h1>
        <p id={`pet-price-${pet.id}`}>💰 Price: {pet.price}</p>
        <button 
          onClick={() => onBuy(pet)} 
          className="buy-button" 
          aria-label={`Buy ${pet.name} for ${pet.price} coins`}
        >
          Buy
        </button>
      </div>
    </article>
  );
};

export default PetShopCard;
