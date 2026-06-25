import React, { useState } from 'react';
import './InventoryTable.css';
export default function InventoryTable({ inventory }) {
  // Local state to store what the user types into the search bar
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the incoming inventory array based on the searchTerm
  const filteredInventory = inventory.filter((item) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(searchLower) ||
      item.id.toLowerCase().includes(searchLower) ||
      item.class.toLowerCase().includes(searchLower)
    );
  });

  return (
    <section className="table-section">
      <div className="table-header-bar">
        <div>
          <h3>High-Risk Material Monitor</h3>
          <span className="table-subtitle">Live container logs requiring structural containment oversight</span>
        </div>

        {/*Search Input Controller  */}
        <div className="search-box-container">
          <input
            type="text"
            className="search-input"
            placeholder=" Search by ID, Name or Hazard Class..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Chemical Name</th>
              <th>Formula</th>
              <th>Hazard Class</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.length > 0 ? (
              filteredInventory.map((item) => (
                <tr key={item.id}>
                  <td className="tech-code">{item.id}</td>
                  <td className="chem-name">{item.name}</td>
                  <td className="chem-formula"><code>{item.formula}</code></td>
                  <td><span className="hazard-tag">{item.class}</span></td>
                  <td>{item.zone}</td>
                  <td>
                    <span className={`status-pill ${item.status.includes('Stable') ? 'pill-stable' :
                        item.status.includes('Warning') ? 'pill-warning' : 'pill-critical'
                      }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-table-row">
                  No critical compounds match your filter query.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}