import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary hardcoded credentials for testing before routing
    if (credentials.username === 'admin' && credentials.password === 'safety123') {
      setError('');
      alert('Access Granted! Welcome to HazMat-X.');
      // Routing logic will hook in here next
    } else {
      setError('CRITICAL ERROR: Invalid security credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-panel">
        <div className="login-header">
          <div className="login-logo">☣️</div>
          <h2>HAZMAT-X</h2>
          <p>Materials Containment & Tracking Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error-badge">{error}</div>}

          <div className="form-group">
            <label>Operator Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Enter terminal ID..."
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Security Clearance Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Enter secure passcode..."
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Initialize Terminal Session
          </button>
        </form>

        <div className="login-footer">
          
        </div>
      </div>
    </div>
  );
}