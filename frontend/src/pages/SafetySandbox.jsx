import React from 'react';
import Sidebar from '../components/Sidebar';
import './SafetySandbox.css';

export default function SafetySandbox() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h1>Safety Sandbox</h1>
            <p className="subtitle">Virtual testing workspace to simulate chemical reactions and compatibility risks</p>
          </div>
        </header>

        <section className="analytics-placeholder-card">
          <div className="matrix-icon">🧪</div>
          <h3>Simulation Core Offline</h3>
          <p>Predictive toxicity modeling engines and interactive compound pairing tools will initialize here.</p>
          <div className="mock-chart-line"></div>
        </section>
      </main>
    </div>
  );
}