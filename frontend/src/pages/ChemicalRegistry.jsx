import React from 'react';
import Sidebar from '../components/Sidebar';
import './chemicalRegistry.css';

export default function ChemicalRegistry() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h1>Chemical Registry</h1>
            <p className="subtitle">Official terminal intake form to index and catalog new compound entries</p>
          </div>
        </header>

        <section className="analytics-placeholder-card">
          <div className="matrix-icon">📚</div>
          <h3>Material Registry Closed</h3>
          <p>New chemical tracking cards, hazard designation inputs, and MSDS sheets will compile here.</p>
          <div className="mock-chart-line"></div>
        </section>
      </main>
    </div>
  );
}