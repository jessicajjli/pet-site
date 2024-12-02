// InstructionsCard.jsx
import React from 'react';
import './styles/InstructionsCard.css';

const InstructionsCard = () => {
  return (
    <div className="instructions-card">
      <h2>Welcome to Pet World! </h2>
      <p>Here's how you can manage your pets and interact with the pet shop:</p>
      <ul>
        <li><strong>My Pets</strong>: View the pets you've acquired. Collect money and update their stats.</li>
        <li><strong>Pet Shop</strong>: Browse available pets for purchase. You need enough money to buy new pets.</li>
        <li><strong>Pet Stats</strong>: Keep an eye on your pets' hearts, happiness, and food levels to keep them healthy and happy!</li>
        <li><strong>Level Up</strong>: As you collect money, your level will increase.</li>
      </ul>
    </div>
  );
};

export default InstructionsCard;
