import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import InventoryLedger from './pages/InventoryLedger';
import SafetySandbox from './pages/SafetySandbox';
import ChemicalRegistry from './pages/ChemicalRegistry';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* URL Path Maps */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/ledger" element={<InventoryLedger />} />
        <Route path="/sandbox" element={<SafetySandbox />} />
        <Route path="/registry" element={<ChemicalRegistry />} />
      </Routes>
    </BrowserRouter>
  );
}