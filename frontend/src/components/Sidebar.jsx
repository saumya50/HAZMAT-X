import React from 'react';
import { NavLink } from 'react-router-dom';
import "./sidebar.css"; // ✨ Points directly to your new isolated styles!

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="logo-icon">☣️</span>
        <h2>HazMat-X</h2>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/" className="menu-item">📊 Central Dashboard</NavLink>
        <NavLink to="/ledger" className="menu-item">📦 Inventory Ledger</NavLink>
        <NavLink to="/sandbox" className="menu-item">🧪 Safety Sandbox</NavLink>
        <NavLink to="/registry" className="menu-item">📚 Chemical Registry</NavLink>
      </nav>

      <div className="sidebar-footer">
        <span>HazMat-X Core v1.0.0</span>
      </div>
    </aside>
  );
}