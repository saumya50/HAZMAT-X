import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import MetricGrid from '../components/MetricGrid';
import InventoryTable from '../components/InventoryTable';
import './dashboard.css';

export default function Dashboard() {
  const [metrics] = useState({
    totalChemicals: 42,
    totalWeightKg: 1850,
    activeAlerts: 3,
    storageCapacityPct: 68,
  });

  const [inventory] = useState([
    { id: 'CHEM-092', name: 'Acetone', formula: 'C3H6O', class: 'Flammable Liquid', zone: 'Sector A', status: 'Stable' },
    { id: 'CHEM-114', name: 'Hydrochloric Acid', formula: 'HCl', class: 'Corrosive Acid', zone: 'Sector C', status: 'Corrosion Warning' },
    { id: 'CHEM-045', name: 'Sodium Cyanide', formula: 'NaCN', class: 'Acute Toxic', zone: 'Vault 2', status: 'Critical Isolation' },
    { id: 'CHEM-221', name: 'Liquid Nitrogen', formula: 'N2', class: 'Cryogenic Gas', zone: 'Sector B', status: 'Stable' },
  ]);

  return (
    <div className="app-container">
      
      <Sidebar />

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
        
       
        <MetricGrid metrics={metrics} />
        
     
        <InventoryTable inventory={inventory} />

      </main>
    </div>
  );
}