'use client';
import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Card from './components/Card';
import PetShopCard from './components/PetShopCard';
import Popup from './components/Popup';

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

  // Initialize the my pets state --> this will be connected to local storage
  const [myPets, setMyPets] = useState([
    {
      id: 1,
      name: 'Fluffy',
      image: './images/1.png',
      hearts: 120,
      happiness: 80,
      food: 50,
      money: 300,
      acquiredDate: '2023-12-01',
    },
    {
      id: 2,
      name: 'Buddy',
      image: './images/2.png',
      hearts: 200,
      happiness: 95,
      food: 70,
      money: 500,
      acquiredDate: '2023-11-20',
    },
  ]);

  const [shopPets, setShopPets] = useState([
    {
      id: 3,
      name: 'Whiskers',
      image: './images/1.png',
    },
    {
      id: 4,
      name: 'Shadow',
      image: './images/1.png',
    },
  ]);

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

  // Function to buy a pet
  const handleBuyPet = (pet) => {
    // Deduct pet cost from money
    const petCost = 500; // we need to change this 500 to a dynamic number
    if (money >= petCost) {
      setMoney(money - petCost);

      // Add the pet to my pets list
      const newPet = {
        ...pet,
        hearts: 100,
        happiness: 100,
        food: 100,
        money: 0,
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
  const handleUpdatePet = (updatedPet) => {
    setMyPets(
      myPets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet))
    );
  };

  // Function to handle collect action
  const handleCollect = (pet) => {
    // Increase money 
    const earnedMoney = 50; // We need to change this I made this number up
    const updatedPet = {
      ...pet,
      money: pet.money + earnedMoney,
    };
    setMyPets(
      myPets.map((p) => (p.id === updatedPet.id ? updatedPet : p))
    );

    // Update money
    setMoney(money + earnedMoney);

    // Update level based on money or other criteria
    const newLevel = Math.floor((money + earnedMoney) / 1000) + 1;
    if (newLevel !== level) {
      setLevel(newLevel);
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
        {/* THIS IS TO CLEAR YOUR LOCAL STORAGE FOR TESTING PURPOSES
        <button onClick={handleClear}>Clear Local Storage</button> */}
      </header>
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
              />
              {activeTab === 'tab1' && (
                <div className="pet-cards-container">
                  {myPets.map((pet) => (
                    <Card
                      key={pet.id}
                      pet={pet}
                      onClick={() => setSelectedPet(pet)}
                    />
                  ))}
                </div>
              )}
              {activeTab === 'tab2' && (
                <div className="pet-cards-container">
                  {shopPets.map((pet) => (
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
