import React from 'react';

export default function Sidebar() {
  return (
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
       HazMat-X Core v1.0.0
      </div>
    </aside>
  );
}