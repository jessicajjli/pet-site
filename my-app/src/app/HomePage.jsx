'use client';
import React, { useState } from 'react';
import './HomePage.css';
import Card from './components/Card';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const petCards = [
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
  ];

  return (
    <div className="homepage">
      <header className="header">
        <h1>Pet World</h1>
      </header>
      <main className="main-content">
        <section className="main-section">
          <div className="pet-container">
            <div className="tab-header">
              <button
                className={activeTab === 'tab1' ? 'active-tab' : ''}
                onClick={() => setActiveTab('tab1')}
              >
                Tab 1
              </button>
              <button
                className={activeTab === 'tab2' ? 'active-tab' : ''}
                onClick={() => setActiveTab('tab2')}
              >
                Tab 2
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
                  {petCards.map((pet) => (
                    <Card key={pet.id} pet={pet} />
                  ))}
                </div>
              )}
              {activeTab === 'tab2' && (
                <div>
                  <h2>Pet shop</h2>
                  <p>Hi this is the pet shop</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Pet World. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
