'use client';
import React, { useState } from 'react';
import './styles/Donate.css';

const Donate = ({ pets, onDonate }) => {
  const [selectedPetId, setSelectedPetId] = useState('');
  const [amount, setAmount] = useState(0);

  const handleDonate = () => {
    if (selectedPetId && amount > 0) {
      onDonate(selectedPetId, amount);
      alert(`Donated ${amount} coins to pet!`);
      setAmount(0); // Reset amount
    } else {
      alert('Please select a pet and enter a valid amount.');
    }
  };

  return (
    <div className="donate-container">
      <h1>Donate to a Pet</h1>
      <div className="donate-form">
        <label htmlFor="pet-select">Choose a pet:</label>
        <select
          id="pet-select"
          value={selectedPetId}
          onChange={(e) => setSelectedPetId(e.target.value)}
        >
          <option value="">Select a Pet</option>
          {pets.map((pet) => (
            <option key={pet.id} value={pet.id}>
              {pet.name}
            </option>
          ))}
        </select>
        <label htmlFor="donate-amount">Donation Amount:</label>
        <input
          type="number"
          id="donate-amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={handleDonate}>Donate</button>
      </div>
    </div>
  );
};

export default Donate;
