import React from 'react';
import Sidebar from '../components/Sidebar';
import './InventoryLedger.css';
import './dashboard.css';

export default function Analytics() {
  return (
    <div className="dashboard-container">
      <Sidebar activePage="ledger"/>
      
      <main className="main-content">
        <header className="dashboard-header">
          <div>
            
            <h1>Inventory Ledger</h1>
            <p className="subtitle">Master archive of all registered hazmat records and supply levels</p>
          </div>
        </header>

        <section className="analytics-placeholder-card">
          <div className="matrix-icon">📦</div> 
          <h3>Ledger Database Core</h3>
          <p>The complete chronological storage logs and supply tracking tables will initialize here.</p>
          <div className="mock-chart-line"></div>
        </section>
      </main>
    </div>
  );
}