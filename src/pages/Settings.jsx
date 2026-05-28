import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-page animate-fade-in">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Manage your academy preferences and configurations.</p>
      </div>

      <div className="settings-container">
        <div className="settings-section">
          <h3>Academy Information</h3>
          <div className="form-group">
            <label>Academy Name</label>
            <input type="text" defaultValue="Sensor Academy" />
          </div>
          <div className="form-group">
            <label>Support Email</label>
            <input type="email" defaultValue="support@sensoracademy.com" />
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
