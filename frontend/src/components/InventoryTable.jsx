import React from 'react';

export default function InventoryTable({ inventory }) {
  return (
    <section className="table-section">
      <div className="table-header-bar">
        <h3>High-Risk Material Monitor</h3>
        <span className="table-subtitle">Live container logs requiring structural containment oversight</span>
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
            {inventory.map((item) => (
              <tr key={item.id}>
                <td className="tech-code">{item.id}</td>
                <td className="chem-name">{item.name}</td>
                <td className="chem-formula"><code>{item.formula}</code></td>
                <td><span className="hazard-tag">{item.class}</span></td>
                <td>{item.zone}</td>
                <td>
                  <span className={`status-pill ${
                    item.status.includes('Stable') ? 'pill-stable' : 
                    item.status.includes('Warning') ? 'pill-warning' : 'pill-critical'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}