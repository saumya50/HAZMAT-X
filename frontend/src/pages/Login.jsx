import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [operatorId, setOperatorId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock Industrial Operator Authentication 
    if (operatorId.toLowerCase() === 'admin' && password === 'hazmat2026') {
      setError('');
      onLogin(); // Triggers global state shift to lift the login screen
    } else {
      setError('Invalid Operator Credentials. Verification failed.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-brand">
          <span className="brand-icon">☣️</span>
          <h2>HazMat-X Portal</h2>
          <p>Secure Terminal Access Allocation</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-field">
            <label>Operator Clearance ID</label>
            <input 
              type="text" 
              placeholder="e.g., admin" 
              value={operatorId}
              onChange={(e) => setOperatorId(e.target.value)}
              required
            />
          </div>

          <div className="input-field">
            <label>Security Passkey</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="login-error-msg">{error}</div>}

          <button type="submit" className="login-submit-btn">
            Verify & Authenticate
          </button>
        </form>

        <footer className="login-footer">
          <p>Authorized personnel operations only. Logs monitored systematically.</p>
        </footer>
      </div>
    </div>
  );
}