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
  const [donationAmount, setDonationAmount] = useState(0);

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
        {/* 
        <div className="donate-section">
          <label htmlFor={`donation-input-${pet.id}`}>Donate Coins</label>
          <input
            id={`donation-input-${pet.id}`}
            type="number"
            placeholder="Donate Coins"
            value={donationAmount}
            onChange={(e) => setDonationAmount(Number(e.target.value))}
            onClick={(e) => e.stopPropagation()}
            aria-describedby={`donation-desc-${pet.id}`}
          />
          <p id={`donation-desc-${pet.id}`}>
            Enter the amount of coins you wish to donate to {pet.name}.
          </p>
          <button onClick={handleDonate} aria-label={`Donate coins to ${pet.name}`}>
            Donate 💰
          </button>
        </div>
        */}
        <p>Acquired: <time dateTime={pet.acquiredDate}>{pet.acquiredDate}</time></p>
      </section>
    </article>
  );
};

export default Card;

// 'use client';
// import React, { useState } from 'react';
// import './styles/Card.css';

// const healthStages = ['Sick', 'Okay', 'Healthy'];

// // Calculate the health stage based on pet attributes
// const getHealthStage = (pet) => {
//   if (pet.hearts >= 90 && pet.happiness >= 90 && pet.food >= 90) {
//     return healthStages[2]; // Healthy
//   } else if (pet.hearts >= 50 && pet.happiness >= 50 && pet.food >= 50) {
//     return healthStages[1]; // Okay
//   } else {
//     return healthStages[0]; // Sick
//   }
// };

// const Card = ({ pet, onClick, onCollect, onDonate }) => {
//   const [donationAmount, setDonationAmount] = useState(0);

//   const handleDonate = (e) => {
//     e.stopPropagation();
//     if (donationAmount > 0) {
//       onDonate(pet, donationAmount); 
//       setDonationAmount(0); 
//       alert(`Donated ${donationAmount} coins to ${pet.name}!`);
//     } else {
//       alert('Please enter a valid donation amount.');
//     }
//   };

//   return (
//     <div className="pet-card" onClick={onClick}>
//       <div className="pet-card-top">
//         <img src={pet.image} alt={pet.name} className="pet-image" />
//         <div className="pet-info">
//           <h3>{pet.name}</h3>
//           <p>❤️ Hearts: {pet.hearts}</p>
//           <p>😊 Happiness: {pet.happiness}</p>
//           <p>🍖 Food: {pet.food}</p>
//           <p>🌱 Health Stage: {getHealthStage(pet)}</p>
//         </div>
//       </div>
//       <div className="pet-card-bottom">
//         <button
//           className="collect-button"
//           onClick={(e) => {
//             e.stopPropagation();
//             onCollect(pet);
//           }}
//         >
//           💰 Collect: {pet.money}
//         </button>
//         {/* <div className="donate-section">
//           <input
//             type="number"
//             placeholder="Donate Coins"
//             value={donationAmount}
//             onChange={(e) => setDonationAmount(Number(e.target.value))}
//             onClick={(e) => e.stopPropagation()}
//           />
//           <button onClick={handleDonate}>
//           Donate 💰
//           </button>
//         </div> */}
//         <p>Acquired: {pet.acquiredDate}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
