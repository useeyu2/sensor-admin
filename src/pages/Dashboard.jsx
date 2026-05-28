import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, BookOpen, Activity } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard animate-fade-in">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening at Sensor Academy.</p>
      </div>

      <div className="metrics-grid">
        <div className="metric-card clickable" onClick={() => navigate('/users')}>
          <div className="metric-icon users">
            <Users size={32} color="white" />
          </div>
          <div className="metric-info">
            <h3>Total Users</h3>
            <h2>1,248</h2>
            <span className="trend positive">+12% this week</span>
          </div>
        </div>
        <div className="metric-card clickable" onClick={() => navigate('/content')}>
          <div className="metric-icon content">
            <BookOpen size={32} color="white" />
          </div>
          <div className="metric-info">
            <h3>Total Courses</h3>
            <h2>42</h2>
            <span className="trend positive">+3 new</span>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon revenue">
            <Activity size={32} color="white" />
          </div>
          <div className="metric-info">
            <h3>Active Sessions</h3>
            <h2>89</h2>
            <span className="trend neutral">Stable</span>
          </div>
        </div>
      </div>
      
      <div className="dashboard-recent">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p><strong>John Doe</strong> uploaded a new video to <em>Math 101</em></p>
              <span>2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p><strong>Jane Smith</strong> registered as a new user</p>
              <span>4 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <p>New document added to <em>Physics Topic 4</em></p>
              <span>Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
