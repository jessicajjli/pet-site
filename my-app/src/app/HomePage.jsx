'use client';
import React, { useState } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('tab1');

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
                <div>
                  <h2>My Pets</h2>
                  <p>pet cards will be here</p>
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
