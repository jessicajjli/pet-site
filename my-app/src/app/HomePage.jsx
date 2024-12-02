
'use client';
import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Card from './components/Card';
import PetShopCard from './components/PetShopCard';
import Popup from './components/Popup';
import InstructionsCard from './components/InstructionsCard'; 

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('tab1');

    // THE FUNCTION BELOW IS FOR TESTING PURPOSES
    // IF FOR SOME REASON YOU NEED TO RESET YOUR LOCAL STORAGE YOU CAN UNCOMMENT THE CODE BELOW
    // AND THEN CALL THE FUNCTION WHEN A BUTTON IS CLICKED. THIS WILL CLEAR THE myPets and shopPets ON YOUR
    // LOCAL STORAGE
    // const handleClear = () => {
    //   if (typeof window !== 'undefined') {
    //     localStorage.removeItem('myPets');
    //     localStorage.removeItem('shopPets');
    //     // Optionally, reload the page to reset the state
    //     window.location.reload();
    //   };
    // };

  // State for the selected pet (for the popup)
  const [selectedPet, setSelectedPet] = useState(null);

  // Initialize money and level, will be connected to local storage
  const [money, setMoney] = useState(10000); // starting money (we can change this I made it up)
  const [level, setLevel] = useState(1); // users start from level 1

  const [search, setSearch] = useState('');
  function regexstr(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }


  // Initialize the my pets state --> this will be connected to local storage
  const [myPets, setMyPets] = useState([
    {
      id: 1,
      name: 'Fluffy',
      image: './images/1.png',
      hearts: 100,
      happiness: 80,
      food: 50,
      money: 300,
      growth: 'Baby',
      acquiredDate: '2023-12-01',
    },
    {
      id: 2,
      name: 'Buddy',
      image: './images/2.png',
      hearts: 100,
      happiness: 95,
      food: 70,
      money: 500,
      growth: 'Baby',
      acquiredDate: '2023-11-20',
    },
  ]);

  const [shopPets, setShopPets] = useState(() => {
    const basePrice = 1000;
    const petData = [
      { id: 3, name: 'Whiskers', image: './images/3.png' },
      { id: 4, name: 'Shadow', image: './images/4.png' },
      { id: 5, name: 'Luna', image: './images/1.png' }, // need new images for these pets
      { id: 6, name: 'Max', image: './images/2.png' },
      // Can add more pets here in the future
    ];

    return petData.map((pet, index) => ({
      ...pet,
      price: basePrice + index * 1000, // Each pet will cost 1000 more than the last
    }));
  });
     

  // Load data from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedMyPets = localStorage.getItem('myPets');
      const storedShopPets = localStorage.getItem('shopPets');
      const storedMoney = localStorage.getItem('money');
      const storedLevel = localStorage.getItem('level');

      if (storedMyPets) {
        setMyPets(JSON.parse(storedMyPets));
      }
      if (storedShopPets) {
        setShopPets(JSON.parse(storedShopPets));
      }
      if (storedMoney) {
        setMoney(parseInt(storedMoney, 10));
      }
      if (storedLevel) {
        setLevel(parseInt(storedLevel, 10));
      }
    }
  }, []);

  // Update local storage when my pets change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myPets', JSON.stringify(myPets));
    }
  }, [myPets]);

  // Update local storage when shop pets change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('shopPets', JSON.stringify(shopPets));
    }
  }, [shopPets]);

  // Update local storage when money changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('money', money.toString());
    }
  }, [money]);

  // Update local storage when level changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('level', level.toString());
    }
  }, [level]);

  // Naturally decrement pet state values over time
  useEffect(() => {
    const interval = setInterval(() => {
      setMyPets((prevPets) =>
        prevPets.map((pet) => {
          // Decrease each stat by 1, ensuring they don't go below 0
          const newHearts = Math.max(pet.hearts - 1, 0);
          const newHappiness = Math.max(pet.happiness - 1, 0);
          const newFood = Math.max(pet.food - 1, 0);
  
          return {
            ...pet,
            hearts: newHearts,
            happiness: newHappiness,
            food: newFood,
          };
        })
      );
    }, 60000); // Decrease stats every 60,000 ms (1 minute)
  
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);


  // Function to buy a pet
  const handleBuyPet = (pet) => {
    // Deduct pet cost from money
    const petCost = pet.price; 
    if (money >= petCost) {
      setMoney(money - petCost);

      // Add the pet to my pets list
      const newPet = {
        ...pet,
        hearts: 50,
        happiness: 50,
        food: 50,
        money: 0,
        growth: 'Baby',
        acquiredDate: new Date().toISOString().split('T')[0],
      };
      setMyPets([...myPets, newPet]);

      // Removing the pet from the shop
      setShopPets(shopPets.filter((shopPet) => shopPet.id !== pet.id));
    } else {
      alert('Not enough money to buy this pet.');
    }
  };

  // Function to update pet stats
  // const handleUpdatePet = (updatedPet) => {
  //   setMyPets((prevPets) =>
  //     prevPets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet))
  //   );
  // };
  // Function to update pet stats
const handleUpdatePet = (updatedPet) => {
  const { hearts, happiness, food, growth } = updatedPet;

  // Update the pet in the state
  setMyPets((prevPets) =>
    prevPets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet))
  );
};


  // Function to handle collect action
  const handleCollect = (pet) => {
    // Increase money 
    const earnedMoney = pet.money; 
    if (earnedMoney > 0) {
      setMoney((prevMoney) => prevMoney + earnedMoney);
      const updatedPet = {
        ...pet,
        money: 0,
      }; 
      handleUpdatePet(updatedPet);

      // Update level based on new total money
      const newTotalMoney = money + earnedMoney;
      const newLevel = Math.floor(newTotalMoney / 1000) + 1;
      if (newLevel !== level) {
        setLevel(newLevel);
      }
    }
  };

  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <p>Level:</p>
          <p>{level}</p>
        </div>
        <h1 className="header-title">Pet World</h1>
        <div className="header-right">
          <p>Money:</p>
          <p>{money}</p>
        </div>
        {/* THIS IS TO CLEAR YOUR LOCAL STORAGE FOR TESTING PURPOSES */}
        {/* <button onClick={handleClear}>Clear Local Storage</button> */}
      </header>
      {/* Instructions Card added here */}
      <section className="instructions-container">
        <InstructionsCard />
      </section>

      <main className="main-content">
        <section className="main-section">
          <div className="pet-container">
            <div className="tab-header">
              <button
                className={activeTab === 'tab1' ? 'active-tab' : ''}
                onClick={() => setActiveTab('tab1')}
              >
                My Pets
              </button>
              <button
                className={activeTab === 'tab2' ? 'active-tab' : ''}
                onClick={() => setActiveTab('tab2')}
              >
                Pet Shop
              </button>
            </div>
            <div className="tab-content">
            <input
              type="text"
              placeholder="Search for a pet..."
              className="tab-search-bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
              {activeTab === 'tab1' && (
                <div className="pet-cards-container">
                  {myPets
                    .filter((pet) => {
                      const regex = new RegExp(regexstr(search), 'i');
                      return regex.test(pet.name);
                    })
                    .map((pet) => (
                      <Card
                        key={pet.id}
                        pet={pet}
                        onClick={() => setSelectedPet(pet)}
                        onCollect={handleCollect}
                        onUpdatePet={handleUpdatePet}
                      />
                    ))}
                </div>
              )}
              {activeTab === 'tab2' && (
                <div className="pet-cards-container">
                  {shopPets
                    .filter((pet) => {
                      const regex = new RegExp(regexstr(search), 'i');
                      return regex.test(pet.name);
                    })
                    .map((pet) => (
                      <PetShopCard
                        key={pet.id}
                        pet={pet}
                        onBuy={handleBuyPet}
                      />
                    ))}
                </div>
              )}
              
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Pet World. All rights reserved.</p>
      </footer>
      {selectedPet && (
        <Popup
          pet={selectedPet}
          onClose={() => setSelectedPet(null)}
          onUpdatePet={handleUpdatePet}
          onCollect={(pet) => {
            handleCollect(pet);
            handleUpdatePet(pet);
          }}
        />
      )}
    </div>
  );
};

export default HomePage;
