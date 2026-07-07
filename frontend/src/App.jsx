import React, { useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CentralDashboard from './pages/Dashboard'; 
import InventoryLedger from './pages/InventoryLedger';
import SafetySandbox from './pages/SafetySandbox';
import ChemicalRegistry from './pages/ChemicalRegistry';
import './pages/appLayout.css';//layout protection file
import Login from './pages/Login';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
    {!isAuthenticated ? (
        /*Logged Out State */
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        /*Logged In State*/
      <div className="app-layout">
        {/* The sidebar stays locked on the left side globally */}
        <Sidebar /> 
        
        {/* Only the main content container swaps dynamically on the right */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CentralDashboard />} />
            <Route path="/ledger" element={<InventoryLedger />} />
            <Route path="/sandbox" element={<SafetySandbox />} />
            <Route path="/registry" element={<ChemicalRegistry />} />
          </Routes>
        </main>
      </div>
      )}
    </BrowserRouter>
  );
}