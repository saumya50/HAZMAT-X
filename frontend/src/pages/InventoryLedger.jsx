import React, { useState } from 'react';
import './inventoryLedger.css';

// Mock Chemical Engineering Dataset
const INITIAL_CHEMICALS = [
  { id: 1, name: 'Acetone', formula: 'CH3COCH3', hazard: 'Flammable', quantity: '45 L', location: 'Bay A-1' },
  { id: 2, name: 'Hydrochloric Acid', formula: 'HCl', hazard: 'Corrosive', quantity: '20 L', location: 'Acid Cabinet' },
  { id: 3, name: 'Sodium Hydroxide', formula: 'NaOH', hazard: 'Corrosive', quantity: '15 kg', location: 'Base Cabinet' },
  { id: 4, name: 'Benzene', formula: 'C6H6', hazard: 'Toxic', quantity: '10 L', location: 'Bay B-4' },
  { id: 5, name: 'Ethanol', formula: 'C2H5OH', hazard: 'Flammable', quantity: '120 L', location: 'Bulk Tank 2' },
  { id: 6, name: 'Ammonium Nitrate', formula: 'NH4NO3', hazard: 'Reactive', quantity: '50 kg', location: 'Dry Store' }
];

export default function InventoryLedger() {
  const [chemicals] = useState(INITIAL_CHEMICALS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHazard, setSelectedHazard] = useState('All');

  // Filter Logic
  const filteredChemicals = chemicals.filter(chem => {
    const matchesSearch = chem.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          chem.formula.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHazard = selectedHazard === 'All' || chem.hazard === selectedHazard;
    return matchesSearch && matchesHazard;
  });

  return (
    <div className="ledger-container">
      <header className="ledger-header">
        <h1>Inventory Ledger</h1>
        <p>Real-time regulatory tracking and stock allocation metrics.</p>
      </header>

      {/* Control Panel: Search & Filters */}
      <div className="control-panel">
        <input 
          type="text" 
          placeholder="Search by name or formula (e.g., HCl)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <select 
          value={selectedHazard} 
          onChange={(e) => setSelectedHazard(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All">All Hazards</option>
          <option value="Flammable">Flammable</option>
          <option value="Corrosive">Corrosive</option>
          <option value="Toxic">Toxic</option>
          <option value="Reactive">Reactive</option>
        </select>
      </div>

      {/* Data Table */}
      <div className="table-wrapper">
        <table className="ledger-table">
          <thead>
            <tr>
              <th>Chemical Name</th>
              <th>Formula</th>
              <th>Hazard Classification</th>
              <th>Current Stock</th>
              <th>Storage Location</th>
            </tr>
          </thead>
          <tbody>
            {filteredChemicals.length > 0 ? (
              filteredChemicals.map(chem => (
                <tr key={chem.id}>
                  <td className="chem-name">{chem.name}</td>
                  <td className="chem-formula"><code>{chem.formula}</code></td>
                  <td>
                    <span className={`hazard-badge ${chem.hazard.toLowerCase()}`}>
                      {chem.hazard}
                    </span>
                  </td>
                  <td>{chem.quantity}</td>
                  <td>{chem.location}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-results">No compounds match your current search queries.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}