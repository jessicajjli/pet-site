'use client';
import React from 'react';
import './styles/Card.css';

const healthStages = ['Sick', 'Okay', 'Healthy'];

// Calculate the health stage based on pet attributes
const getHealthStage = (pet) => {
  if (pet.hearts >= 100 && pet.happiness >= 100 && pet.food >= 100) {
    return healthStages[2]; // Healthy
  } else if (pet.hearts >= 50 && pet.happiness >= 50 && pet.food >= 50) {
    return healthStages[1]; // Okay
  } else {
    return healthStages[0]; // Sick
  }
};

const Card = ({ pet, onClick, onCollect }) => {
  return (
    <div className="pet-card" onClick={onClick}>
      <div className="pet-card-top">
        <img src={pet.image} alt={pet.name} className="pet-image" />
        <div className="pet-info">
          <h3>{pet.name}</h3>
          <p>❤️ Hearts: {pet.hearts}</p>
          <p>😊 Happiness: {pet.happiness}</p>
          <p>🍖 Food: {pet.food}</p>
          <p>🌱 Health Stage: {getHealthStage(pet)}</p>
        </div>
      </div>
      <div className="pet-card-bottom">
        <button
          className="collect-button"
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


// 'use client';
// import React, { useState, useEffect } from 'react';
// import './styles/Card.css';
// const growthStages = ['Baby', 'Young', 'Adult'];

// // const getGrowthStage = (pet, collectedMoney) => { 
//   // if (collectedMoney >= 300) {
//   //    return growthStages[2]; "Adult" } else if (
//   //     collectedMoney >= 100) { return growthStages[1]; "Young" } else {
//   //        return growthStages[0]; "Baby" } };
// const getGrowthStage = (pet) => { 
//   if (pet.happiness >= 90 && pet.food >= 90) { return growthStages[2];
//     "Adult" } else if (pet.happiness >= 80 && pet.food >= 80) { 
//       return growthStages[1];  "Young" } else { 
//         return growthStages[0]; "Baby" } };

// const Card = ({ pet, onClick, onCollect, }) => {
//   const [growthStage, setGrowthStage] = useState('Baby');
//   useEffect(() => { setGrowthStage(getGrowthStage(pet)); }, [pet]); // Aissata Growth Stages
//   return (
//     <div className="pet-card" onClick={onClick}>
//       <div className="pet-card-top">
//         <img src={pet.image} alt={pet.name} className="pet-image" />
//         <div className="pet-info">
//           <h3>{pet.name}</h3>
//           <p>❤️ Hearts: {pet.hearts}</p>
//           <p>😊 Happiness: {pet.happiness}</p>
//           <p>🍖 Food: {pet.food}</p>
//           <p>🌱 Growth Stage: {pet.growthStage || 'Baby'}</p>
//         </div>
//       </div>
//       <div className="pet-card-bottom">
//         <button className='collect-button'
//           onClick={(e) => {
//             e.stopPropagation();
//             onCollect(pet); 
                       
//           }}
//         >
//             💰 Collect: {pet.money}
//           </button>
//         <p>Acquired: {pet.acquiredDate}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
