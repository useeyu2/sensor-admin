import React, { useState } from 'react';
import { Activity, Clock, Monitor } from 'lucide-react';
import './Sessions.css';

const Sessions = () => {
  const [sessions] = useState([
    { id: 1, user: 'Alice Johnson', device: 'MacBook Pro', location: 'New York, US', duration: '45 mins', status: 'Active' },
    { id: 2, user: 'Bob Smith', device: 'Windows PC', location: 'London, UK', duration: '2 hours', status: 'Active' },
    { id: 3, user: 'Diana Evans', device: 'iPhone 13', location: 'Sydney, AU', duration: '15 mins', status: 'Active' },
    { id: 4, user: 'Charlie Davis', device: 'iPad Pro', location: 'Toronto, CA', duration: '5 mins', status: 'Idle' },
  ]);

  return (
    <div className="sessions-page animate-fade-in">
      <div className="page-header">
        <div>
          <h1>Active Sessions</h1>
          <p>Monitor real-time user activity across the academy.</p>
        </div>
        <div className="header-stats">
          <div className="stat-badge">
            <Activity size={16} />
            <span>89 Active Now</span>
          </div>
        </div>
      </div>

      <div className="sessions-list">
        {sessions.map(session => (
          <div key={session.id} className="session-card">
            <div className="session-icon">
              <Monitor size={24} />
            </div>
            <div className="session-details">
              <h3>{session.user}</h3>
              <p className="session-meta">
                {session.device} • {session.location}
              </p>
            </div>
            <div className="session-status-col">
              <div className="session-duration">
                <Clock size={14} />
                <span>{session.duration}</span>
              </div>
              <span className={`status-pill ${session.status.toLowerCase()}`}>
                {session.status}
              </span>
            </div>
            <div className="session-actions">
              <button className="btn-secondary danger">Terminate</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
