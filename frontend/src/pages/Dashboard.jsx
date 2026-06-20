import React from 'react';
import './dashboard.css';

export default function Dashboard() {
  return (
    <div className="app-container">
      
      
      <aside className="sidebar">
        <div>
          <div className="sidebar-brand">
            <div className="brand-icon">X</div>
            <h1 className="brand-text">HazMat-X</h1>
          </div>
          
          <nav className="nav-menu">
            <a href="#" className="nav-link active">📊 Central Dashboard</a>
            <a href="#" className="nav-link">📦 Inventory Ledger</a>
            <a href="#" className="nav-link">🧪 Safety Sandbox</a>
            <a href="#" className="nav-link">📚 Chemical Registry</a>
          </nav>
        </div>
        
        <div className="sidebar-footer">
          MNNIT Chemical Engineering Dept.
        </div>
      </aside>

      
      <main className="main-viewport">
        <header className="view-header">
          <div className="header-meta">
            <h2>Control Room Dashboard</h2>
            <p>Real-time facility tracking and chemical compatibility analytics.</p>
          </div>
          <div className="status-badge">
            System Status: <span className="status-indicator">Operational</span>
          </div>
        </header>
        
       

      </main>
    </div>
  );
}