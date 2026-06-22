import React from 'react';

export default function MetricGrid({ metrics }) {
  return (
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
  );
}