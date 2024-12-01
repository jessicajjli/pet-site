'use client';
import React, { useState } from 'react';
import './styles/Popup.css';

// Health stages: Sick, Okay, Healthy
const healthStages = ['Sick', 'Okay', 'Healthy'];

// Function to determine health based on stats
const getHealthStage = (pet) => {
  if (pet.hearts >= 100 && pet.happiness >= 100 && pet.food >= 100) {
    return healthStages[2]; // Healthy
  } else if (pet.hearts >= 50 && pet.happiness >= 50 && pet.food >= 50) {
    return healthStages[1]; // Okay
  } else {
    return healthStages[0]; // Sick
  }
};

const Popup = ({ pet, onClose, onUpdatePet, onCollect }) => {
  if (!pet) return null;

  const [petState, setPetState] = useState(pet);

  const handleIncrease = (stat) => {
    const newValue = Math.min(petState[stat] + 10, 100);
    let updatedPet = {
      ...petState,
      [stat]: newValue,
    };

    // Check if a stat reached max value (100) and if it was below 100 before
    if (newValue === 100 && petState[stat] < 100) {
      updatedPet.money += 100; // Increase pet money by 100 when stat reaches 100
    }

    setPetState(updatedPet);
    onUpdatePet(updatedPet);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>{petState.name}</h2>
        <img src={petState.image} alt={petState.name} className="popup-image" />
        {/* New container for stats and buttons */}
        <div className="popup-stats-buttons-container">
          <div className="popup-stats">
            <p>❤️ Hearts: {petState.hearts}</p>
            <p>😊 Happiness: {petState.happiness}</p>
            <p>🍖 Food: {petState.food}</p>
            <p>💰 Money: {petState.money}</p>
            <p>🌱 Health: {getHealthStage(petState)}</p> {/* Health Stage */}
            <p>📅 Acquired: {petState.acquiredDate}</p>
          </div>
          <div className="popup-buttons">
            <button onClick={() => handleIncrease('happiness')}>Play!</button>
            <button onClick={() => handleIncrease('food')}>Feed!</button>
            <button onClick={() => handleIncrease('hearts')}>Love!</button>
            <button
              onClick={() => {
                onCollect(petState); // Update parent state
                const updatedPet = {
                  ...petState,
                  money: 0, // Reset money after collecting
                };
                setPetState(updatedPet);
                onUpdatePet(updatedPet);
              }}
            >
              Collect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

// 'use client';
// import React, { useState } from 'react';
// import './styles/Popup.css';

// const growthStages = ['Baby', 'Teen', 'Adult'];

// // Reuse the function to calculate the growth stage
// const getGrowthStage = (pet) => {
//   if (pet.hearts >= 100 && pet.happiness >= 100 && pet.food >= 100) {
//     return growthStages[2]; // Adult
//   } else if (pet.hearts >= 50 && pet.happiness >= 50 && pet.food >= 50) {
//     return growthStages[1]; // Teen
//   } else {
//     return growthStages[0]; // Baby
//   }
// };

// const Popup = ({ pet, onClose, onUpdatePet, onCollect }) => {
//   if (!pet) return null;

//   const [petState, setPetState] = useState(pet);

//   const handleIncrease = (stat) => {
//     const newValue = Math.min(petState[stat] + 10, 100);
//     let updatedPet = {
//       ...petState,
//       [stat]: newValue,
//     };

//     // Check if a stat reached max value (100) and if it was below 100 before
//     if (newValue === 100 && petState[stat] < 100) {
//       updatedPet.money += 100; // Increase pet money by 100 when stat reaches 100
//     }

//     setPetState(updatedPet);
//     onUpdatePet(updatedPet);
//   };

//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-button" onClick={onClose}>
//           ×
//         </button>
//         <h2>{petState.name}</h2>
//         <img src={petState.image} alt={petState.name} className="popup-image" />
//         {/* New container for stats and buttons */}
//         <div className="popup-stats-buttons-container">
//           <div className="popup-stats">
//             <p>❤️ Hearts: {petState.hearts}</p>
//             <p>😊 Happiness: {petState.happiness}</p>
//             <p>🍖 Food: {petState.food}</p>
//             <p>💰 Money: {petState.money}</p>
//             <p>🌱 Growth Stage: {getGrowthStage(petState)}</p>
//             <p>📅 Acquired: {petState.acquiredDate}</p>
//           </div>
//           <div className="popup-buttons">
//             <button onClick={() => handleIncrease('happiness')}>Play!</button>
//             <button onClick={() => handleIncrease('food')}>Feed!</button>
//             <button onClick={() => handleIncrease('hearts')}>Love!</button>
//             <button
//               onClick={() => {
//                 onCollect(petState); // Update parent state
//                 const updatedPet = {
//                   ...petState,
//                   money: 0, // Reset money after collecting
//                 };
//                 setPetState(updatedPet);
//                 onUpdatePet(updatedPet);
//               }}
//             >
//               Collect
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;

// 'use client';
// import React, { useState } from 'react';
// import './styles/Popup.css';

// const Popup = ({ pet, onClose, onUpdatePet, onCollect }) => {
//   if (!pet) return null;

//   const [petState, setPetState] = useState(pet);

//   const handleIncrease = (stat) => {
//     const newValue = Math.min(petState[stat] + 10, 100);
//     let updatedPet = {
//       ...petState,
//       [stat]: newValue, 
//     };

//     // Check if a stat reached max value (100) and if it was below 100 before
//     if (newValue === 100 && petState[stat] < 100) {
//       updatedPet.money += 100; // Increase pet money by 100 when stat reaches 100
//     }

//     setPetState(updatedPet);
//     onUpdatePet(updatedPet);
//   };

//   return (
//     <div className="popup-overlay" onClick={onClose}>
//       <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//         <button className="close-button" onClick={onClose}>
//           ×
//         </button>
//         <h2>{petState.name}</h2>
//         <img src={petState.image} alt={petState.name} className="popup-image" />
//         {/* New container for stats and buttons */}
//         <div className="popup-stats-buttons-container">
//           <div className="popup-stats">
//             <p>❤️ Hearts: {petState.hearts}</p>
//             <p>😊 Happiness: {petState.happiness}</p>
//             <p>🍖 Food: {petState.food}</p>
//             <p>💰 Money: {petState.money}</p>
//             <p>🌱 Growth Stage: {pet.growthStage || 'Baby'}</p>
//             <p>📅 Acquired: {petState.acquiredDate}</p>
//           </div>
//           <div className="popup-buttons">
//             <button onClick={() => handleIncrease('happiness')}>
//               Play!
//             </button>
//             <button onClick={() => handleIncrease('food')}>
//               Feed!
//             </button>
//             <button onClick={() => handleIncrease('hearts')}>
//               Love!
//             </button>
//             <button
//               onClick={() => {
//                 onCollect(petState); // Update parent state
//                 const updatedPet = {
//                   ...petState,
//                   money: 0, // Reset money after collecting
//                 };
//                 setPetState(updatedPet);
//                 onUpdatePet(updatedPet);
//               }}
//             >
//               Collect
//             </button>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Popup;
