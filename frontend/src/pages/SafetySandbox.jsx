import React, { useState } from 'react';
import './safetySandbox.css';

const CHEMICALS_LIST = [
  { id: 'hcl', name: 'Hydrochloric Acid', type: 'Acid' },
  { id: 'naoh', name: 'Sodium Hydroxide', type: 'Base' },
  { id: 'acetone', name: 'Acetone', type: 'Organic Solvent' },
  { id: 'nh4no3', name: 'Ammonium Nitrate', type: 'Oxidizer' },
  { id: 'h2o', name: 'Water', type: 'Universal Solvent' }
];

export default function SafetySandbox() {
  const [chem1, setChem1] = useState('');
  const [chem2, setChem2] = useState('');
  const [simulationResult, setSimulationResult] = useState(null);

  const runCompatibilityTest = () => {
    if (!chem1 || !chem2) {
      setSimulationResult({
        status: 'warning',
        title: 'Incomplete Parameters',
        message: 'Please select two distinct compounds to initialize the containment simulation.'
      });
      return;
    }

    if (chem1 === chem2) {
      setSimulationResult({
        status: 'safe',
        title: 'Identical Compounds',
        message: 'Mixing identical substances into the same vessel preserves current structural safety thresholds.'
      });
      return;
    }

    // Reaction Matrix Logic
    const pair = [chem1, chem2].sort().join('+');

    switch (pair) {
      case 'hcl+naoh':
        setSimulationResult({
          status: 'action',
          title: 'Exothermic Neutralization',
          message: 'Warning: Acid-base reaction generates rapid heat dissipation. Ensure reactor cooling jackets are fully active.'
        });
        break;
      case 'acetone+nh4no3':
        setSimulationResult({
          status: 'danger',
          title: 'CRITICAL INCOMPATIBILITY',
          message: 'EXPLOSION RISK: Highly unstable organic-oxidizer reaction matrix detected. Terminate containment sequence immediately.'
        });
        break;
      case 'hcl+nh4no3':
        setSimulationResult({
          status: 'danger',
          title: 'Toxic Vapor Generation',
          message: 'BIOHAZARD: Mixing forms dangerous nitrous fumes. Evacuate sector or activate immediate localized air scrubbers.'
        });
        break;
      default:
        setSimulationResult({
          status: 'safe',
          title: 'Stable Mixture',
          message: 'No immediate chemical incompatibilities or hazardous runaways detected under standard operating metrics.'
        });
    }
  };

  return (
    <div className="sandbox-container">
      <header className="sandbox-header">
        <h1>Safety Sandbox</h1>
        <p>Predictive chemical interaction modeling and hazard testing matrix.</p>
      </header>

      <div className="sandbox-card">
        <h2>Simulate Compound Matrix</h2>
        <p className="card-subtext">Select raw materials to run real-time reactivity check.</p>

        <div className="dropdown-row">
          <div className="dropdown-group">
            <label>Primary Compound</label>
            <select value={chem1} onChange={(e) => setChem1(e.target.value)}>
              <option value="">Select Chemical...</option>
              {CHEMICALS_LIST.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div className="divider-icon">🧪</div>

          <div className="dropdown-group">
            <label>Secondary Compound</label>
            <select value={chem2} onChange={(e) => setChem2(e.target.value)}>
              <option value="">Select Chemical...</option>
              {CHEMICALS_LIST.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
        </div>

        <button className="test-btn" onClick={runCompatibilityTest}>
          Run Compatibility Test
        </button>
      </div>

      {/* Dynamic Results Display Box */}
      {simulationResult && (
        <div className={`result-box ${simulationResult.status}`}>
          <h3>{simulationResult.title}</h3>
          <p>{simulationResult.message}</p>
        </div>
      )}
    </div>
  );
}