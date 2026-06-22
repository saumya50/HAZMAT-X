import React,{useState} from 'react';
import './dashboard.css';

export default function Dashboard() {
  const [metrics] = useState({
    totalChemicals: 42,
    totalWeightKg: 1850,
    activeAlerts: 3,
    storageCapacityPct: 68,
  });
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
        <section className="stats-grid">
          <div className="stat-card">
            <p className="card-title">Total Compounds</p>
            <p className="card-number">{metrics.totalChemicals}</p>
          </div>
          
          <div className="stat-card">
            <p className="card-title">Total Mass Stored</p>
            <p className="card-number">{metrics.totalWeightKg} kg</p>
          </div>

          <div className="stat-card">
            <p className="card-title">Active Risk Alerts</p>
            <p className={`card-number ${metrics.activeAlerts > 0 ? 'danger-text' : ''}`}>
              {metrics.activeAlerts}
            </p>
            {metrics.activeAlerts > 0 && <div className="alert-ping" />}
          </div>

          <div className="stat-card">
            <p className="card-title">Facility Capacity</p>
            <p className="card-number">{metrics.storageCapacityPct}%</p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${metrics.storageCapacityPct}%` }}></div>
            </div>
          </div>
        </section>
       

      </main>
    </div>
  );
}